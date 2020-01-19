import { SmartPhoneModel } from "./smart.phone.model";

export class Controller {
  // Framework　からの実装　ーASP.NET/Rails/NestJSとか
}

export interface IDatabaseConnection {
  insert: (sf: SmartPhoneModel) => Promise<boolean>;
  // Booleanは　Insertの結果を伝えます
  // 複雑なハンドリングするとしたらInsertResultとかClass実装した方が良い
}

export class SmartPhoneService {
  private readonly connection: IDatabaseConnection;

  constructor(connection: IDatabaseConnection) {
    this.connection = connection;
  }
  // 略のためとりあえずLoggingやらを抜きにしましょう
  public async register(smartPhone: SmartPhoneModel) {
    if (!this.isValid(smartPhone)) {
      throw new Error(
        "Smart phone model is not valid, please check your inputs"
      );
    }
    await this.connection.insert(smartPhone);
  }

  private isValid(sf: SmartPhoneModel): boolean {
    /* 他のチェックもすべきですけど他のはちょっとややこしい
    例えば　記入した　メーカー、機種、色　やらの Smartphoneが本当にあるのか 
    綴りやらの場合　ー　そんなSmartPhoneはないはず。
    Samsung Galaxy の　iOS 10 OS　の携帯が存在しないでしょう。 */
    if (sf.releaseDate < new Date()) {
      return true;
    } else {
      return false;
    }
  }
}

export class SmartPhoneController extends Controller {
  private readonly smartPhoneService: SmartPhoneService;

  constructor(sf: SmartPhoneService) {
    super();
    this.smartPhoneService = sf;
  }

  async post(smartPhone: SmartPhoneModel) {
    try {
      await this.smartPhoneService.register(smartPhone);
      return new HttpResponse(200, "Insert　からの　id　やら");
    } catch (error) {
      return new HttpResponse(500, error.message);
    }
  }
}

export class HttpResponse {
  statusCode: number;
  message: string;
  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
  //　この帰り値の後のこともFrameworkに任せます
}
