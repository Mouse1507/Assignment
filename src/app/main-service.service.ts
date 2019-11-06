import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Navigation
} from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  constructor(private router: Router) {

  }
  userLogin: any;
  userPass: any;
  listAns = [];
  listMon = [{
      "Id": "ADAV",
      "Name": "Lập trình Android nâng cao",
      "Logo": "ADAV.jpg"
    },
    {
      "Id": "ADBS",
      "Name": "Lập trình Android cơ bản",
      "Logo": "ADBS.jpg"
    },
    {
      "Id": "ADTE",
      "Name": "Kiểm thử và triển khai ứng dụng Android",
      "Logo": "ADTE.jpg"
    },
    {
      "Id": "ADUI",
      "Name": "Thiết kế giao diện trên Android",
      "Logo": "ADUI.jpg"
    },
    {
      "Id": "ASNE",
      "Name": "Lập trình ASP.NET",
      "Logo": "ASNE.png"
    },
    {
      "Id": "CLCO",
      "Name": "Điện toán đám mây",
      "Logo": "CLCO.jpg"
    },
    {
      "Id": "DBAV",
      "Name": "SQL Server",
      "Logo": "DBAV.png"
    },
    {
      "Id": "DBBS",
      "Name": "Cơ sở dữ liệu",
      "Logo": "DBBS.png"
    },
    {
      "Id": "GAME",
      "Name": "Lập trình game 2D",
      "Logo": "GAME.png"
    }
  ];
  listQuiz = [{
      "Id": "ADAV",
      "quiz": [{
        "Id": 25106,
        "Text": "Có mấy loại Service?",
        "Marks": 1,
        "AnswerId": 104121,
        "Answers": [{
            "Id": 104118,
            "Text": "3"
          },
          {
            "Id": 104119,
            "Text": "4"
          },
          {
            "Id": 104120,
            "Text": "1"
          },
          {
            "Id": 104121,
            "Text": "2"
          }
        ]
      }, {
        "Id": 25107,
        "Text": "Trong IntentService, phương thức onHandlerIntent sẽ được tự động gọi trong phương thức nào?",
        "Marks": 1,
        "AnswerId": 104124,
        "Answers": [{
          "Id": 104122,
          "Text": "onServiceConnected()"
        }, {
          "Id": 104123,
          "Text": "onServiceDisConnected()"
        }, {
          "Id": 104124,
          "Text": "onStartCommand()"
        }, {
          "Id": 104125,
          "Text": "onBind()"
        }]
      }, {
        "Id": 25108,
        "Text": "Khi nào phương thức ServiceConnection.onServiceConnected được gọi?",
        "Marks": 1,
        "AnswerId": 104126,
        "Answers": [{
          "Id": 104126,
          "Text": "Sau khi một thành phần gọi Context.startService()"
        }, {
          "Id": 104127,
          "Text": "Sau khi một thành phần gọi Context.bindService()"
        }, {
          "Id": 104128,
          "Text": "Sau khi BroadcastReceiver nhận một Intent được gửi bởi Service"
        }, {
          "Id": 104129,
          "Text": "Khi một Service gọi Context.startActivity()"
        }]
      }, {
        "Id": 25109,
        "Text": "Phương thức Service.stopSelf(int startId) có tham số kiểu int. Tham số này dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 104132,
        "Answers": [{
          "Id": 104130,
          "Text": "Nếu startId khác 0, Service sẽ bị hủy một cách vô điều kiện"
        }, {
          "Id": 104131,
          "Text": "Tham số miêu tả số miliseconds bị trì hoãn trước khi Service bị hủy"
        }, {
          "Id": 104132,
          "Text": "Là start identifier gần nhất nhận được bởi lời gọi onStart(Intent, int)"
        }, {
          "Id": 104133,
          "Text": "Được sử dụng để dừng Service nếu Service đang chạy trong process id với process id bằng giá trị startid"
        }]
      }, {
        "Id": 25110,
        "Text": "Câu nào là đúng khi đề cập đến Service?",
        "Marks": 1,
        "AnswerId": 104137,
        "Answers": [{
          "Id": 104134,
          "Text": "Các ứng dụng khác nhau không thể truy cập đến các Service của chính nó"
        }, {
          "Id": 104135,
          "Text": "Tất cả phương án đều đúng"
        }, {
          "Id": 104136,
          "Text": "Lớp Service luôn luôn được truy cập bởi tất cả ứng dụng Android khác cài trên thiết bị"
        }, {
          "Id": 104137,
          "Text": "Service có thể chạy nền vô hạn kể cả khi thành phần khởi tạo Service đã bị hủy"
        }]
      }, {
        "Id": 25111,
        "Text": "Trong IntentService, onBind mặc định trả lại giá trị nào?",
        "Marks": 1,
        "AnswerId": 104139,
        "Answers": [{
          "Id": 104138,
          "Text": "-1"
        }, {
          "Id": 104139,
          "Text": "null"
        }, {
          "Id": 104140,
          "Text": "0"
        }, {
          "Id": 104141,
          "Text": "\"\""
        }]
      }, {
        "Id": 25112,
        "Text": "Phương thức stopSelf dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 104145,
        "Answers": [{
          "Id": 104142,
          "Text": "Dừng thông báo notification tới người dùng"
        }, {
          "Id": 104143,
          "Text": "Dừng chương trình"
        }, {
          "Id": 104144,
          "Text": "Dừng kết nối Service với Sqlite"
        }, {
          "Id": 104145,
          "Text": "Dừng Service"
        }]
      }, {
        "Id": 25113,
        "Text": "Phương thức onStartCommand được gọi khi nào?",
        "Marks": 1,
        "AnswerId": 104149,
        "Answers": [{
          "Id": 104146,
          "Text": "Khi phương thức bindService được gọi"
        }, {
          "Id": 104147,
          "Text": "Khi phương thức stopSelf được gọi"
        }, {
          "Id": 104148,
          "Text": "Khi phương thức onBind được gọi"
        }, {
          "Id": 104149,
          "Text": "Khi phương thức startService được gọi"
        }]
      }, {
        "Id": 25114,
        "Text": "Bạn nên giải phóng tài nguyên mà Service sử dụng trong phương thức nào?",
        "Marks": 1,
        "AnswerId": 104152,
        "Answers": [{
          "Id": 104150,
          "Text": "onPause"
        }, {
          "Id": 104151,
          "Text": "pauseService"
        }, {
          "Id": 104152,
          "Text": "onDestroy"
        }, {
          "Id": 104153,
          "Text": "startService"
        }]
      }, {
        "Id": 25115,
        "Text": "Để hủy Service dùng phương thức nào?",
        "Marks": 1,
        "AnswerId": 104155,
        "Answers": [{
          "Id": 104154,
          "Text": "PauseService"
        }, {
          "Id": 104155,
          "Text": "StopService"
        }, {
          "Id": 104156,
          "Text": "PauseServices"
        }, {
          "Id": 104157,
          "Text": "StopServices"
        }]
      }, {
        "Id": 25116,
        "Text": "Làm thế nào để disable một Broadcast Receiver khi nó đã được đăng ký trong AndroidManifest.xml?",
        "Marks": 1,
        "AnswerId": 104161,
        "Answers": [{
          "Id": 104158,
          "Text": "Sử dụng lớp PackageReceiverManager"
        }, {
          "Id": 104159,
          "Text": "Sử dụng lớp BroadcastReceiver"
        }, {
          "Id": 104160,
          "Text": "Sử dụng lớp BroadcastReceiverManger"
        }, {
          "Id": 104161,
          "Text": "Sử dụng lớp PackageManager"
        }]
      }, {
        "Id": 25117,
        "Text": "Có mấy cách phát, nhận broadcast receiver?",
        "Marks": 1,
        "AnswerId": 104163,
        "Answers": [{
          "Id": 104162,
          "Text": "1"
        }, {
          "Id": 104163,
          "Text": "2"
        }, {
          "Id": 104164,
          "Text": "4"
        }, {
          "Id": 104165,
          "Text": "3"
        }]
      }, {
        "Id": 25118,
        "Text": "Khi sử dụng Intent.ACTION_BOOT_COMPLETED, hệ thống sẽ broadcast mấy lần?",
        "Marks": 1,
        "AnswerId": 104167,
        "Answers": [{
          "Id": 104166,
          "Text": "4"
        }, {
          "Id": 104167,
          "Text": "1"
        }, {
          "Id": 104168,
          "Text": "3"
        }, {
          "Id": 104169,
          "Text": "2"
        }]
      }, {
        "Id": 25119,
        "Text": "Vòng đời của Broadcast Receiver bao gồm mấy phương thức?",
        "Marks": 1,
        "AnswerId": 104170,
        "Answers": [{
          "Id": 104170,
          "Text": "1"
        }, {
          "Id": 104171,
          "Text": "2"
        }, {
          "Id": 104172,
          "Text": "4"
        }, {
          "Id": 104173,
          "Text": "3"
        }]
      }, {
        "Id": 25120,
        "Text": "Lệnh sau dùng để làm gì?                                                                                   \u003creceiver             android:name=\".MyCallReceiver\"             android:exported=\"false\" \u003e  \u003c/receiver\u003e",
        "Marks": 1,
        "AnswerId": 104177,
        "Answers": [{
          "Id": 104174,
          "Text": "Disable receiver MyCallReceiver"
        }, {
          "Id": 104175,
          "Text": "Khai báo MyCallReceiver là broadcast hệ thống"
        }, {
          "Id": 104176,
          "Text": "Cho phép ứng dụng Calendar của hệ thống gửi broadcast tới receiver MyCallReceiver"
        }, {
          "Id": 104177,
          "Text": "Cấm ứng dụng khác gửi broadcast tới receiver MyCallReceiver"
        }]
      }, {
        "Id": 25121,
        "Text": "Nếu ứng dụng của bạn ở trạng thái foreground, bạn chỉ muốn ứng dụng chỉ nhận broadcast nhất định khi nó active, bạn phải làm gì?",
        "Marks": 1,
        "AnswerId": 104181,
        "Answers": [{
          "Id": 104178,
          "Text": "Load Intent thông qua menu hoặc Action Bar"
        }, {
          "Id": 104179,
          "Text": "Đăng ký BroadcastReceiver với mức độ ưu tiên thấp"
        }, {
          "Id": 104180,
          "Text": "Đăng ký động BroadcastReceiver với mức độ ưu tiếp thấp.Sử dụng abortBroadcast lúc runtime để ngăn cản gửi"
        }, {
          "Id": 104181,
          "Text": "Đăng ký động BroadcastReceiver trong onResume và hủy đăng ký trong onPause"
        }]
      }, {
        "Id": 25122,
        "Text": "Broadcast Intent thông thường sẽ biến mất khi hệ thống xử lý xong?",
        "Marks": 1,
        "AnswerId": 104183,
        "Answers": [{
          "Id": 104182,
          "Text": "Sai"
        }, {
          "Id": 104183,
          "Text": "Đúng"
        }]
      }, {
        "Id": 25123,
        "Text": "Phương thức onReceive có mấy tham số đầu vào?",
        "Marks": 1,
        "AnswerId": 104184,
        "Answers": [{
          "Id": 104184,
          "Text": "2"
        }, {
          "Id": 104185,
          "Text": "4"
        }, {
          "Id": 104186,
          "Text": "1"
        }, {
          "Id": 104187,
          "Text": "3"
        }]
      }, {
        "Id": 25124,
        "Text": "Phương thức nào được sử dụng để gửi broadcast intent mà intent này sẽ không mất đi sau khi hệ thống xử lý?",
        "Marks": 1,
        "AnswerId": 104191,
        "Answers": [{
          "Id": 104188,
          "Text": "Context.sendStickyBroadcast"
        }, {
          "Id": 104189,
          "Text": "Context.sendingStickyBroadcast"
        }, {
          "Id": 104190,
          "Text": "Context.sendingStickyBroadcastIntent"
        }, {
          "Id": 104191,
          "Text": "Context.sendStickyBroadcastIntent"
        }]
      }, {
        "Id": 25125,
        "Text": "Để nhận thông tin người dùng qua wifi, phải sử dụng gì?",
        "Marks": 1,
        "AnswerId": 104192,
        "Answers": [{
          "Id": 104192,
          "Text": "LocationManager.NETWORK_PROVIDER"
        }, {
          "Id": 104193,
          "Text": "LocationManager.WIFI_PROVIDER"
        }, {
          "Id": 104194,
          "Text": "LocationManager.GPS_PROVIDER"
        }, {
          "Id": 104195,
          "Text": "LocationManager.CELLUAR_PROVIDER"
        }]
      }, {
        "Id": 25126,
        "Text": "Phương thức callback nào gọi khi vị trí người dùng thay đổi?",
        "Marks": 1,
        "AnswerId": 104196,
        "Answers": [{
          "Id": 104196,
          "Text": "onLocationChanged"
        }, {
          "Id": 104197,
          "Text": "onCurrentLocationChanged"
        }, {
          "Id": 104198,
          "Text": "onLocationChange"
        }, {
          "Id": 104199,
          "Text": "onCurentLocationChange"
        }]
      }, {
        "Id": 25127,
        "Text": "Khi tạo ứng dụng trên trang developer của Facebook, ngoài thông tin username và password, người dùng phải nhập thêm thông tin gì?",
        "Marks": 1,
        "AnswerId": 104203,
        "Answers": [{
          "Id": 104200,
          "Text": "Không cần thêm thông tin nào"
        }, {
          "Id": 104201,
          "Text": "app id"
        }, {
          "Id": 104202,
          "Text": "certificate"
        }, {
          "Id": 104203,
          "Text": "key hash"
        }]
      }, {
        "Id": 25128,
        "Text": "Để đăng nhập ứng dụng Facebook từ ứng dụng Android, Facebook SDK yêu cầu gì?",
        "Marks": 1,
        "AnswerId": 104207,
        "Answers": [{
          "Id": 104204,
          "Text": "Không có yêu cầu nào"
        }, {
          "Id": 104205,
          "Text": "Sử dụng Google social API"
        }, {
          "Id": 104206,
          "Text": "Sử dụng Facebook Graph API"
        }, {
          "Id": 104207,
          "Text": "Thiết bị phải cài đặt ứng dụng native Facebook"
        }]
      }, {
        "Id": 25129,
        "Text": "Có thể cài đặt ứng dụng native Facebook trên Emulator không?",
        "Marks": 1,
        "AnswerId": 104208,
        "Answers": [{
          "Id": 104208,
          "Text": "Có thể"
        }, {
          "Id": 104209,
          "Text": "Không thể"
        }]
      }, {
        "Id": 25130,
        "Text": "Để lấy thông tin vị trí người dùng sử dụng GPS_PROVIDER, phải thêm permission nào vào Android manifest file?",
        "Marks": 1,
        "AnswerId": 104213,
        "Answers": [{
          "Id": 104210,
          "Text": "android.permission.USE_CREDENTIALS"
        }, {
          "Id": 104211,
          "Text": "android.permission.android.permission.ACCESS_MOCK_LOCATION"
        }, {
          "Id": 104212,
          "Text": "android.permission.INTERNET"
        }, {
          "Id": 104213,
          "Text": "android.permission.ACCESS_FINE_LOCATION"
        }]
      }, {
        "Id": 25131,
        "Text": "Để đăng nhập ứng dụng Facebook từ ứng dụng Android, phải thêm Activity nào vào Android manifest?",
        "Marks": 1,
        "AnswerId": 104215,
        "Answers": [{
          "Id": 104214,
          "Text": "com.facebook.SingleSignInActivity"
        }, {
          "Id": 104215,
          "Text": "com.facebook.LoginActivity"
        }, {
          "Id": 104216,
          "Text": "com.facebook.SignInActivity"
        }, {
          "Id": 104217,
          "Text": "com.facebook.SignOnActivity"
        }]
      }, {
        "Id": 25132,
        "Text": "Có thể gửi dữ liệu người dùng giả tới Emulator thông qua DDMS không?",
        "Marks": 1,
        "AnswerId": 104218,
        "Answers": [{
          "Id": 104218,
          "Text": "Có"
        }, {
          "Id": 104219,
          "Text": "Không"
        }]
      }, {
        "Id": 25133,
        "Text": "Địa chỉ trang web nào cung cấp facebook sdk cho ứng dụng Android?",
        "Marks": 1,
        "AnswerId": 104222,
        "Answers": [{
          "Id": 104220,
          "Text": "http://facebook.com"
        }, {
          "Id": 104221,
          "Text": "http://facebook.com.vn"
        }, {
          "Id": 104222,
          "Text": "https://developers.facebook.com"
        }, {
          "Id": 104223,
          "Text": "http://developers.facebook.com.vn"
        }]
      }, {
        "Id": 25134,
        "Text": "Phương thức getLastKnownLocation của LocationManager dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 104226,
        "Answers": [{
          "Id": 104224,
          "Text": "Trả lại thông tin location của địa điểm đầu tiên ghi nhận được"
        }, {
          "Id": 104225,
          "Text": "Trả lại thông tin location của địa điểm gần nhất"
        }, {
          "Id": 104226,
          "Text": "Trả lại thông tin cache location"
        }, {
          "Id": 104227,
          "Text": "Trả lại thông tin location hiện tại"
        }]
      }, {
        "Id": 25135,
        "Text": "Media Player có hỗ trợ một số listener để tương tác với Player?",
        "Marks": 1,
        "AnswerId": 104229,
        "Answers": [{
          "Id": 104228,
          "Text": "Sai"
        }, {
          "Id": 104229,
          "Text": "Đúng"
        }]
      }, {
        "Id": 25136,
        "Text": "Dùng phương thức gì để cho phép media process thao tác với camera?",
        "Marks": 1,
        "AnswerId": 104230,
        "Answers": [{
          "Id": 104230,
          "Text": "unlock()"
        }, {
          "Id": 104231,
          "Text": "opening()"
        }, {
          "Id": 104232,
          "Text": "unlocking()"
        }, {
          "Id": 104233,
          "Text": "open()"
        }]
      }, {
        "Id": 25137,
        "Text": "Google cloud messaging cho phép gửi thông điệp đến tối đa bao nhiêu người?",
        "Marks": 1,
        "AnswerId": 104237,
        "Answers": [{
          "Id": 104234,
          "Text": "10000"
        }, {
          "Id": 104235,
          "Text": "100"
        }, {
          "Id": 104236,
          "Text": "100"
        }, {
          "Id": 104237,
          "Text": "1000"
        }]
      }, {
        "Id": 25138,
        "Text": "Quyền nào là cần thiết để ứng dụng có thể lưu ảnh chụp của Camera trên SD card?",
        "Marks": 1,
        "AnswerId": 104238,
        "Answers": [{
          "Id": 104238,
          "Text": "android.permission.WRITE_EXTERNAL_STORAGE"
        }, {
          "Id": 104239,
          "Text": "android.permission.WRITE_GSERVICES"
        }, {
          "Id": 104240,
          "Text": "android.permission.WRITE_APN_SETTINGS"
        }, {
          "Id": 104241,
          "Text": "android.permission.WAKE_LOCK"
        }]
      }, {
        "Id": 25139,
        "Text": "Phương thức nào của Camera được sử dụng để lấy các thông số thiết lập cho Camera?",
        "Marks": 1,
        "AnswerId": 104245,
        "Answers": [{
          "Id": 104242,
          "Text": "setParameter"
        }, {
          "Id": 104243,
          "Text": "setParameters"
        }, {
          "Id": 104244,
          "Text": "getParameter"
        }, {
          "Id": 104245,
          "Text": "getParameters"
        }]
      }, {
        "Id": 25140,
        "Text": "Lớp nào hỗ trợ xây dựng backup agent?",
        "Marks": 1,
        "AnswerId": 104249,
        "Answers": [{
          "Id": 104246,
          "Text": "FilesHelper"
        }, {
          "Id": 104247,
          "Text": "BackupHelper"
        }, {
          "Id": 104248,
          "Text": "SharedBackupHelper"
        }, {
          "Id": 104249,
          "Text": "SharedPreferencesBackupHelper"
        }]
      }, {
        "Id": 25141,
        "Text": "Khi kết thúc quay phim, sử dụng phương thức nào để khóa camera?",
        "Marks": 1,
        "AnswerId": 104250,
        "Answers": [{
          "Id": 104250,
          "Text": "reConnect()"
        }, {
          "Id": 104251,
          "Text": "reConnecting()"
        }, {
          "Id": 104252,
          "Text": "reLock()"
        }, {
          "Id": 104253,
          "Text": "reLocking()"
        }]
      }, {
        "Id": 25142,
        "Text": "Media Player có thể play mọi loại file audio?",
        "Marks": 1,
        "AnswerId": 104254,
        "Answers": [{
          "Id": 104254,
          "Text": "Sai"
        }, {
          "Id": 104255,
          "Text": "Đúng"
        }]
      }, {
        "Id": 25143,
        "Text": "Sử dụng phương thức gì của Camera để nhận thông tin của Camera?",
        "Marks": 1,
        "AnswerId": 104259,
        "Answers": [{
          "Id": 104256,
          "Text": "start"
        }, {
          "Id": 104257,
          "Text": "close"
        }, {
          "Id": 104258,
          "Text": "launch"
        }, {
          "Id": 104259,
          "Text": "open"
        }]
      }, {
        "Id": 25144,
        "Text": "Phương thức nào được gọi để ngừng cập nhật preview surface?",
        "Marks": 1,
        "AnswerId": 104263,
        "Answers": [{
          "Id": 104260,
          "Text": "DestroypPreviews()"
        }, {
          "Id": 104261,
          "Text": "stopPreviews()"
        }, {
          "Id": 104262,
          "Text": "DestroyPreview()"
        }, {
          "Id": 104263,
          "Text": "stopPreview()"
        }]
      }, {
        "Id": 25145,
        "Text": "Loại Animation nào chỉ sử dụng được cho View?",
        "Marks": 1,
        "AnswerId": 104265,
        "Answers": [{
          "Id": 104264,
          "Text": "Drawable Animation"
        }, {
          "Id": 104265,
          "Text": "View Animation"
        }, {
          "Id": 104266,
          "Text": "Property Animation"
        }, {
          "Id": 104267,
          "Text": "Không có Animation nào đáp ứng được yêu cầu này"
        }]
      }, {
        "Id": 25146,
        "Text": "Phải thiết lập thuộc tính nào bằng true để hỗ trợ tạo hoạt hình cho ViewGroup?",
        "Marks": 1,
        "AnswerId": 104268,
        "Answers": [{
          "Id": 104268,
          "Text": "android:animateLayoutChanges"
        }, {
          "Id": 104269,
          "Text": "android:animateLayoutChange"
        }, {
          "Id": 104270,
          "Text": "android:animateLayoutModify"
        }, {
          "Id": 104271,
          "Text": "android:animateLayoutModifying"
        }]
      }, {
        "Id": 25147,
        "Text": "Đối với drawable animation, phải thiết lập giá trị của thuộc tính android:oneshot bằng true đối với animation-list để làm gì?",
        "Marks": 1,
        "AnswerId": 104272,
        "Answers": [{
          "Id": 104272,
          "Text": "Cho phép animation chỉ chạy một lần duy nhất"
        }, {
          "Id": 104273,
          "Text": "Thuộc tính android:oneshot không có giá trị true và false"
        }, {
          "Id": 104274,
          "Text": "Cho phép animation chạy lặp đi lặp lại"
        }, {
          "Id": 104275,
          "Text": "Không có thuộc tính android:oneshot của animation-list"
        }]
      }, {
        "Id": 25148,
        "Text": "Android có hỗ trợ khai báo animation trong XML hay không?",
        "Marks": 1,
        "AnswerId": 104276,
        "Answers": [{
          "Id": 104276,
          "Text": "Có"
        }, {
          "Id": 104277,
          "Text": "Không"
        }]
      }, {
        "Id": 25149,
        "Text": "Trong animation, có thể định nghĩa tối đa bao nhiêu frame?",
        "Marks": 1,
        "AnswerId": 104280,
        "Answers": [{
          "Id": 104278,
          "Text": "3"
        }, {
          "Id": 104279,
          "Text": "2"
        }, {
          "Id": 104280,
          "Text": "Không giới hạn số frame"
        }, {
          "Id": 104281,
          "Text": "1"
        }]
      }, {
        "Id": 25150,
        "Text": "Khái niệm nào đề cập đến cặp gồm thời gian và giá trị để định nghĩa trạng thái xác định tại thời gian xác định của animation?",
        "Marks": 1,
        "AnswerId": 104285,
        "Answers": [{
          "Id": 104282,
          "Text": "keys"
        }, {
          "Id": 104283,
          "Text": "frame"
        }, {
          "Id": 104284,
          "Text": "key"
        }, {
          "Id": 104285,
          "Text": "keyframe"
        }]
      }, {
        "Id": 25151,
        "Text": "File XML liệt kê danh sách frame tạo nên animation nằm trong thư mục nào?",
        "Marks": 1,
        "AnswerId": 104289,
        "Answers": [{
          "Id": 104286,
          "Text": "res/layout"
        }, {
          "Id": 104287,
          "Text": "res/values"
        }, {
          "Id": 104288,
          "Text": "res/menu"
        }, {
          "Id": 104289,
          "Text": "res/drawable"
        }]
      }, {
        "Id": 25152,
        "Text": "ObjectAnimator là lớp con của lớp nào?",
        "Marks": 1,
        "AnswerId": 104290,
        "Answers": [{
          "Id": 104290,
          "Text": "ValueAnimator"
        }, {
          "Id": 104291,
          "Text": "ButtonAnimator"
        }, {
          "Id": 104292,
          "Text": "TextAnimator"
        }, {
          "Id": 104293,
          "Text": "ValuableAnimator"
        }]
      }, {
        "Id": 25153,
        "Text": "Khi khai báo Broadcast Receiver để nhận biết sự thay đổi kết nối mạng của thiết bị, bạn có thể disable broadcast receiver không?",
        "Marks": 1,
        "AnswerId": 104294,
        "Answers": [{
          "Id": 104294,
          "Text": "Có"
        }, {
          "Id": 104295,
          "Text": "Không"
        }]
      }, {
        "Id": 25154,
        "Text": "Lệnh nào để kiểm tra kết nối 3G của thiết bị?",
        "Marks": 1,
        "AnswerId": 104298,
        "Answers": [{
          "Id": 104296,
          "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_WIMAX);"
        }, {
          "Id": 104297,
          "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_2.5G);"
        }, {
          "Id": 104298,
          "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);"
        }, {
          "Id": 104299,
          "Text": "ConnectivityManager connMgr = (ConnectivityManager)           getSystemService(Context.CONNECTIVITY_SERVICE); NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_3G);"
        }]
      }, {
        "Id": 25155,
        "Text": "Để trích xuất dữ liệu link trong XML, phải sử dụng phương thức nào của XmlPullParser?",
        "Marks": 1,
        "AnswerId": 104303,
        "Answers": [{
          "Id": 104300,
          "Text": "getHrefValue(\"href\")"
        }, {
          "Id": 104301,
          "Text": "getAttributeValue(\"href\")"
        }, {
          "Id": 104302,
          "Text": "getHrefValue(null,\"href\")"
        }, {
          "Id": 104303,
          "Text": "getAttributeValue(null,\"href\")"
        }]
      }, {
        "Id": 25156,
        "Text": "Bạn hãy cho biết kết quả khi thực hiện gọi phương thức sau? private String readLink(XmlPullParser parser) throws IOException, XmlPullParserException {         String link = \"\";         parser.require(XmlPullParser.START_TAG, ns, \"link\");         String ta",
        "Marks": 1,
        "AnswerId": 104305,
        "Answers": [{
          "Id": 104304,
          "Text": "Trả lại giá trị của tag title"
        }, {
          "Id": 104305,
          "Text": "Trả lại giá trị href của link"
        }, {
          "Id": 104306,
          "Text": "Chương trình báo lỗi khi biên dich"
        }, {
          "Id": 104307,
          "Text": "Chương trình báo lỗi khi chạy"
        }]
      }, {
        "Id": 25157,
        "Text": "Tại sao phải sử dụng AsyncTask để phân tích dữ liệu XML?",
        "Marks": 1,
        "AnswerId": 104310,
        "Answers": [{
          "Id": 104308,
          "Text": "Để xử lý dữ liệu XML ngay cả khi máy không có kết nối WiFi"
        }, {
          "Id": 104309,
          "Text": "Để xử lý dữ liệu XML ngay cả khi máy không có kết nối 3G"
        }, {
          "Id": 104310,
          "Text": "Để tránh cho ứng dụng bị treo vì xử lý dữ liệu trên main thread"
        }, {
          "Id": 104311,
          "Text": "Để đỡ tốn tài nguyên khi xử lý dữ liệu XML lưu trong SQLite"
        }]
      }, {
        "Id": 25158,
        "Text": "Broadcast Receiver xử lý dữ liệu XML trên mạng cần được đăng ký trong phương thức nào?",
        "Marks": 1,
        "AnswerId": 104315,
        "Answers": [{
          "Id": 104312,
          "Text": "onStart"
        }, {
          "Id": 104313,
          "Text": "onPause"
        }, {
          "Id": 104314,
          "Text": "onDestroy"
        }, {
          "Id": 104315,
          "Text": "onCreate"
        }]
      }, {
        "Id": 25159,
        "Text": "Phím tắt nào dùng để tắt bật kết nối mạng trên Emulator?",
        "Marks": 1,
        "AnswerId": 104318,
        "Answers": [{
          "Id": 104316,
          "Text": "F9"
        }, {
          "Id": 104317,
          "Text": "F4"
        }, {
          "Id": 104318,
          "Text": "F8"
        }, {
          "Id": 104319,
          "Text": "F5"
        }]
      }, {
        "Id": 25160,
        "Text": "Kiểu nào không nằm trong lớp ConnectivityManager?",
        "Marks": 1,
        "AnswerId": 104323,
        "Answers": [{
          "Id": 104320,
          "Text": "TYPE_WIMAX"
        }, {
          "Id": 104321,
          "Text": "TYPE_MOBILE"
        }, {
          "Id": 104322,
          "Text": "TYPE_WIFI"
        }, {
          "Id": 104323,
          "Text": "TYPE_3G"
        }]
      }, {
        "Id": 25161,
        "Text": "Để phân tích XML, bạn sẽ sử dụng lớp nào?",
        "Marks": 1,
        "AnswerId": 104325,
        "Answers": [{
          "Id": 104324,
          "Text": "XmlPushParser"
        }, {
          "Id": 104325,
          "Text": "XmlPullParser"
        }, {
          "Id": 104326,
          "Text": "XmlParseParser"
        }, {
          "Id": 104327,
          "Text": "XmlPopParser"
        }]
      }, {
        "Id": 25162,
        "Text": "Để thực hiện đọc file XML trên SD Card, bạn phải bổ sung thêm quyền gì trong AndroidManifest.xml?",
        "Marks": 1,
        "AnswerId": 104328,
        "Answers": [{
          "Id": 104328,
          "Text": "android.permission.READ_EXTERNAL_STORAGE"
        }, {
          "Id": 104329,
          "Text": "android.permission.READ"
        }, {
          "Id": 104330,
          "Text": "android.permission.READ_SD_CARD"
        }, {
          "Id": 104331,
          "Text": "Không cần thêm quyền"
        }]
      }, {
        "Id": 25163,
        "Text": "Contacts Provider cung cấp mấy loại dữ liệu về person?",
        "Marks": 1,
        "AnswerId": 104334,
        "Answers": [{
          "Id": 104332,
          "Text": "1"
        }, {
          "Id": 104333,
          "Text": "2"
        }, {
          "Id": 104334,
          "Text": "3"
        }, {
          "Id": 104335,
          "Text": "4"
        }]
      }, {
        "Id": 25164,
        "Text": "Trong ứng dụng bạn sử dụng lớp nào để truy xuất thông tin Contact?",
        "Marks": 1,
        "AnswerId": 104338,
        "Answers": [{
          "Id": 104336,
          "Text": "PersonResolver"
        }, {
          "Id": 104337,
          "Text": "ContactResolver"
        }, {
          "Id": 104338,
          "Text": "ContentResolver"
        }, {
          "Id": 104339,
          "Text": "PeopleResolver"
        }]
      }, {
        "Id": 25165,
        "Text": "Hằng số nào dùng để thấy thông tin Contact có số phone hay không?",
        "Marks": 1,
        "AnswerId": 104340,
        "Answers": [{
          "Id": 104340,
          "Text": "ContactsContract.Contacts.HAS_PHONE_NUMBER"
        }, {
          "Id": 104341,
          "Text": "ContactsContract.Contacts.HAS_MOBILE_NUMBER"
        }, {
          "Id": 104342,
          "Text": "ContactsContract.Contacts.HAS_PHONE"
        }, {
          "Id": 104343,
          "Text": "ContactsContract.Contacts.PHONE_NUMBER"
        }]
      }, {
        "Id": 25166,
        "Text": "Content URI nào được sử dụng để lấy thông tin email của Contact?",
        "Marks": 1,
        "AnswerId": 104347,
        "Answers": [{
          "Id": 104344,
          "Text": "ContactsContracts.CommonDataKinds.Email.CONTENT_URI"
        }, {
          "Id": 104345,
          "Text": "ContactsContract.CommonDataKinds.Email.CONTENT"
        }, {
          "Id": 104346,
          "Text": "ContactsContract.Email.CONTENT_URI"
        }, {
          "Id": 104347,
          "Text": "ContactsContract.CommonDataKinds.Email.CONTENT_URI"
        }]
      }, {
        "Id": 25167,
        "Text": "Có thể thêm Contact vào Emulator hay không?",
        "Marks": 1,
        "AnswerId": 104348,
        "Answers": [{
          "Id": 104348,
          "Text": "Có"
        }, {
          "Id": 104349,
          "Text": "Không"
        }]
      }, {
        "Id": 25168,
        "Text": "Content URI nào được sử dụng để lấy thông tin phone của Contact?",
        "Marks": 1,
        "AnswerId": 104352,
        "Answers": [{
          "Id": 104350,
          "Text": "ContactsContract.Phone.CONTENT_URI"
        }, {
          "Id": 104351,
          "Text": "ContactsContract.CommonDataKinds.Phone.CONTENT"
        }, {
          "Id": 104352,
          "Text": "ContactsContract.CommonDataKinds.Phone.CONTENT_URI"
        }, {
          "Id": 104353,
          "Text": "ContactsContracts.CommonDataKinds.Phone.CONTENT_URI"
        }]
      }, {
        "Id": 25169,
        "Text": "Bảng nào cung cấp thông tin về person như thông tin dữ liệu về person, như user account và type?",
        "Marks": 1,
        "AnswerId": 104356,
        "Answers": [{
          "Id": 104354,
          "Text": "ContactsContract.Contacts"
        }, {
          "Id": 104355,
          "Text": "ContactsContract.DataTable"
        }, {
          "Id": 104356,
          "Text": "ContactsContract.RawContacts"
        }, {
          "Id": 104357,
          "Text": "ContactsContract.Data"
        }]
      }, {
        "Id": 25170,
        "Text": "Hãy cho biết kết quả khi thực hiện lệnh sau: Cursor phoneCursor = contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,        null,        Phone_CONTACT_ID + \" = ?\",        new String[] { contact_id }, null);",
        "Marks": 1,
        "AnswerId": 104360,
        "Answers": [{
          "Id": 104358,
          "Text": "Bị lỗi khi chạy"
        }, {
          "Id": 104359,
          "Text": "Bị lỗi khi biên dịch"
        }, {
          "Id": 104360,
          "Text": "Trả lại một Cursor chức các số điện thoại của Contact với id là contact_id"
        }, {
          "Id": 104361,
          "Text": "Trả lại một Cursor chức các số điện thoại mobile của Contact với id là contact_id"
        }]
      }, {
        "Id": 25171,
        "Text": "Contacts Provider có hỗ trợ xóa thông tin một contact trong thiết bị hay không?",
        "Marks": 1,
        "AnswerId": 104363,
        "Answers": [{
          "Id": 104362,
          "Text": "Không"
        }, {
          "Id": 104363,
          "Text": "Có"
        }]
      }, {
        "Id": 25172,
        "Text": "Phương thức nào của ContentResolver để cập nhật thông tin cho nhiều Contact cùng lúc?",
        "Marks": 1,
        "AnswerId": 104364,
        "Answers": [{
          "Id": 104364,
          "Text": "applyBatch"
        }, {
          "Id": 104365,
          "Text": "applyAllContacts"
        }, {
          "Id": 104366,
          "Text": "applyBatches"
        }, {
          "Id": 104367,
          "Text": "applyGroupContact"
        }]
      }, {
        "Id": 25173,
        "Text": "Để lấy thông tin SHA1 fingerprint, phải sử dụng công cụ nào?",
        "Marks": 1,
        "AnswerId": 104368,
        "Answers": [{
          "Id": 104368,
          "Text": "keytool"
        }, {
          "Id": 104369,
          "Text": "telnet"
        }, {
          "Id": 104370,
          "Text": "logchat"
        }, {
          "Id": 104371,
          "Text": "ping"
        }]
      }, {
        "Id": 25174,
        "Text": "Thư mục nào chứa code project Google Play Service?",
        "Marks": 1,
        "AnswerId": 104372,
        "Answers": [{
          "Id": 104372,
          "Text": "/extras/google/google_play_services"
        }, {
          "Id": 104373,
          "Text": "/google/google_play_services"
        }, {
          "Id": 104374,
          "Text": "/extras/google/play_licensing"
        }, {
          "Id": 104375,
          "Text": "/extras/google/play_billing"
        }]
      }, {
        "Id": 25175,
        "Text": "Làm thế nào để cài đặt Google Play Service?",
        "Marks": 1,
        "AnswerId": 104378,
        "Answers": [{
          "Id": 104376,
          "Text": "Vào SDK Manager, chọn extra \u003e google play billing library"
        }, {
          "Id": 104377,
          "Text": "Vào SDK Manager, chọn extra \u003e google repository"
        }, {
          "Id": 104378,
          "Text": "Vào SDK Manager, chọn extra \u003e google play service"
        }, {
          "Id": 104379,
          "Text": "Vào SDK Manager, chọn extra \u003e google play apk expansion librariry"
        }]
      }, {
        "Id": 25176,
        "Text": "Địa chỉ trang web nào cung cấp Google Play API cho ứng dụng sử dụng Google Map?",
        "Marks": 1,
        "AnswerId": 104380,
        "Answers": [{
          "Id": 104380,
          "Text": "https://code.google.com/apis/console"
        }, {
          "Id": 104381,
          "Text": "https://code.google.com/"
        }, {
          "Id": 104382,
          "Text": "https://code.google.com/apis"
        }, {
          "Id": 104383,
          "Text": "https://google.com/apis"
        }]
      }, {
        "Id": 25177,
        "Text": "Khi tạo ứng dụng trên google console, bạn phải kích hoạt chức năng nào cho project để ứng dụng có thể hiển thị google map?",
        "Marks": 1,
        "AnswerId": 104386,
        "Answers": [{
          "Id": 104384,
          "Text": "Google Notification Service"
        }, {
          "Id": 104385,
          "Text": "Google Cloud SQL"
        }, {
          "Id": 104386,
          "Text": "Google Map Android API v2"
        }, {
          "Id": 104387,
          "Text": "BigQuery API"
        }]
      }, {
        "Id": 25178,
        "Text": "Phải tải và cấu hình SDK nào để có thể sử dụng Google Map Android API?",
        "Marks": 1,
        "AnswerId": 104390,
        "Answers": [{
          "Id": 104388,
          "Text": "Google Admob Ads SDK"
        }, {
          "Id": 104389,
          "Text": "Google Analytics App Tracking SDK"
        }, {
          "Id": 104390,
          "Text": "Google Play Service SDK"
        }, {
          "Id": 104391,
          "Text": "Android Support Library"
        }]
      }, {
        "Id": 25179,
        "Text": "Trong các quyền dưới đây, quyền nào không cần thiết để hiển thị Google Map?",
        "Marks": 1,
        "AnswerId": 104392,
        "Answers": [{
          "Id": 104392,
          "Text": "android.permission.CHANGE_CONFIGURATION"
        }, {
          "Id": 104393,
          "Text": "android.permission.ACCESS_NETWORK_STATE"
        }, {
          "Id": 104394,
          "Text": "android.permission.WRITE_EXTERNAL_STORAGE"
        }, {
          "Id": 104395,
          "Text": "android.permission.INTERNET"
        }]
      }, {
        "Id": 25180,
        "Text": "Để nhận API key cho phép hiển thị map trong ứng dụng, trang nào được sử dụng để nhận API key?",
        "Marks": 1,
        "AnswerId": 104396,
        "Answers": [{
          "Id": 104396,
          "Text": "Trang web của Google API Console"
        }, {
          "Id": 104397,
          "Text": "Trang chủ Microsoft"
        }, {
          "Id": 104398,
          "Text": "Trang chủ Google"
        }, {
          "Id": 104399,
          "Text": "Trang trủ Apple"
        }]
      }, {
        "Id": 25181,
        "Text": "Trong Eclipse, làm thế nào để biết được đường dẫn của debug keystore?",
        "Marks": 1,
        "AnswerId": 104401,
        "Answers": [{
          "Id": 104400,
          "Text": "Không có cách nào để biết được đường dẫn debug keystore"
        }, {
          "Id": 104401,
          "Text": "Vào Eclipse, Preferences-\u003eAndroid-\u003eBuild"
        }, {
          "Id": 104402,
          "Text": "Vào Eclipse, Preferences-\u003eAndroid-\u003eDDMS"
        }, {
          "Id": 104403,
          "Text": "Vào Eclipse, Preferences-\u003eAndroid-\u003eNDK"
        }]
      }, {
        "Id": 25182,
        "Text": "Google Map Android API đòi hỏi thư viện nào để hiển thị Map?",
        "Marks": 1,
        "AnswerId": 104405,
        "Answers": [{
          "Id": 104404,
          "Text": "UserVoice SDK"
        }, {
          "Id": 104405,
          "Text": "OpenGL ES version 2"
        }, {
          "Id": 104406,
          "Text": "HttpClient"
        }, {
          "Id": 104407,
          "Text": "Maven SDK"
        }]
      }]
    },
    {
      "Id": "ADBS",
      "quiz": [{
        "Id": 25026,
        "Text": "Điều khiển được sử dụng để hiển thị nội dụng trang web trong ứng dụng Android?",
        "Marks": 1,
        "AnswerId": 103784,
        "Answers": [{
          "Id": 103783,
          "Text": "Button"
        }, {
          "Id": 103784,
          "Text": "WebView"
        }, {
          "Id": 103785,
          "Text": "Spinner"
        }, {
          "Id": 103786,
          "Text": "EditText"
        }]
      }, {
        "Id": 25027,
        "Text": "Đối với URLConnection, sử dụng phương thức nào để thiết lập timeout cho connection?",
        "Marks": 1,
        "AnswerId": 103790,
        "Answers": [{
          "Id": 103787,
          "Text": "setURLTimeout()"
        }, {
          "Id": 103788,
          "Text": "setInternetTimeout()"
        }, {
          "Id": 103789,
          "Text": "setTimeout()"
        }, {
          "Id": 103790,
          "Text": "setConnectTimeout()"
        }]
      }, {
        "Id": 25028,
        "Text": "Cho đoạn mã lệnh sau:wv.setWebChromeClient(new WebChromeClient() { @Override public void onReceivedTitle(WebView view, String title) { getWindow().setTitle(title); } });Hãy cho biết đoạn lệnh trên dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 103791,
        "Answers": [{
          "Id": 103791,
          "Text": "Thay đổi title của trang web"
        }, {
          "Id": 103792,
          "Text": "Đóng trang web"
        }, {
          "Id": 103793,
          "Text": "Thay đổi nội dung của trang web"
        }, {
          "Id": 103794,
          "Text": "Lấy thông tin title của trang web"
        }]
      }, {
        "Id": 25029,
        "Text": "Sử dụng lớp nào để truy cập và thay đổi thông tin trên trình duyệt mặc định của hệ điều hành Android?",
        "Marks": 1,
        "AnswerId": 103798,
        "Answers": [{
          "Id": 103795,
          "Text": "WebClient"
        }, {
          "Id": 103796,
          "Text": "WebSafariClient"
        }, {
          "Id": 103797,
          "Text": "WebFirefoxClient"
        }, {
          "Id": 103798,
          "Text": "WebViewClient"
        }]
      }, {
        "Id": 25030,
        "Text": "Câu nào là sai đối với WebView?",
        "Marks": 1,
        "AnswerId": 103800,
        "Answers": [{
          "Id": 103799,
          "Text": "Không có widget cho brownser activity"
        }, {
          "Id": 103800,
          "Text": "Không thể sử dụng tag trong XML layout"
        }, {
          "Id": 103801,
          "Text": "Click vào link sẽ gọi trình duyệt"
        }, {
          "Id": 103802,
          "Text": "Có thể sử dụng tag trong XML layout"
        }]
      }, {
        "Id": 25031,
        "Text": "Phương thức nào của WebSettings để cho phép WebView hỗ trợ JavaScript?",
        "Marks": 1,
        "AnswerId": 103806,
        "Answers": [{
          "Id": 103803,
          "Text": "setJavaScriptEnabled(false)"
        }, {
          "Id": 103804,
          "Text": "setJavaScript(true)"
        }, {
          "Id": 103805,
          "Text": "setJavaScriptEnable(true)"
        }, {
          "Id": 103806,
          "Text": "setJavaScriptEnabled(true)"
        }]
      }, {
        "Id": 25032,
        "Text": "Khi thời gian kết nối đến một URL quá timeout, phương thức getInputStream() sẽ đưa ra ngoại lệ nào?",
        "Marks": 1,
        "AnswerId": 103809,
        "Answers": [{
          "Id": 103807,
          "Text": "java.net.TimeoutException"
        }, {
          "Id": 103808,
          "Text": "java.net.SocketException"
        }, {
          "Id": 103809,
          "Text": "java.net.SocketTimeoutException"
        }, {
          "Id": 103810,
          "Text": "java.net.SocketTimeout"
        }]
      }, {
        "Id": 25033,
        "Text": "Chương trình sử dụng WebView phải có quyền gì?",
        "Marks": 1,
        "AnswerId": 103811,
        "Answers": [{
          "Id": 103811,
          "Text": "android.permission.AUTHENTICATE_ACCOUNTS"
        }, {
          "Id": 103812,
          "Text": "android.permission.BIND_APPWIDGET"
        }, {
          "Id": 103813,
          "Text": "android.permission.INTERNET"
        }, {
          "Id": 103814,
          "Text": "android.permission.BIND_INPUT_METHOD"
        }]
      }, {
        "Id": 25034,
        "Text": "Sử dụng phương thức nào để lấy thông tin tiêu đề trên trang web chạy trên trình duyệt?",
        "Marks": 1,
        "AnswerId": 103817,
        "Answers": [{
          "Id": 103815,
          "Text": "onReceiveTitle"
        }, {
          "Id": 103816,
          "Text": "onReceivedHeader"
        }, {
          "Id": 103817,
          "Text": "onReceivedTitle"
        }, {
          "Id": 103818,
          "Text": "onReceiveHeader"
        }]
      }, {
        "Id": 25035,
        "Text": "Để tải thông tin qua HTTP, chúng ta phải làm gì?",
        "Marks": 1,
        "AnswerId": 103821,
        "Answers": [{
          "Id": 103819,
          "Text": "Sử dụng HttpGet"
        }, {
          "Id": 103820,
          "Text": "Không thể tải thông tin qua HTTP"
        }, {
          "Id": 103821,
          "Text": "Sử dụng thư viện chuẩn của Java"
        }, {
          "Id": 103822,
          "Text": "Sử dụng URLRequesting"
        }]
      }, {
        "Id": 25036,
        "Text": "URI nào được sử dụng để lấy bookmark của trình duyệt?",
        "Marks": 1,
        "AnswerId": 103824,
        "Answers": [{
          "Id": 103823,
          "Text": "content://firefox/bookmarks"
        }, {
          "Id": 103824,
          "Text": "content://browser/bookmarks"
        }, {
          "Id": 103825,
          "Text": "content://chrome/bookmarks"
        }, {
          "Id": 103826,
          "Text": "content://safari/bookmarks"
        }]
      }, {
        "Id": 25037,
        "Text": "Để lưu trữ SQLite trên thẻ nhớ, phải cung cấp quyền gì trong Android Manifest?",
        "Marks": 1,
        "AnswerId": 103828,
        "Answers": [{
          "Id": 103827,
          "Text": "android.permission.ACCESS_CHECKIN_PROPERTIES"
        }, {
          "Id": 103828,
          "Text": "android.permission.WRITE_EXTERNAL_STORAGE"
        }, {
          "Id": 103829,
          "Text": "android.permission.ACCESS_CHECKIN_PROPERTIES"
        }, {
          "Id": 103830,
          "Text": "android.permission.WRITE_SETTINGS"
        }]
      }, {
        "Id": 25038,
        "Text": "Để sử dụng ContentProvider truy cập danh sách cuộc gọi gần đây, bạn phải bổ sung thêm quyền gì vào Android Manifest?",
        "Marks": 1,
        "AnswerId": 103833,
        "Answers": [{
          "Id": 103831,
          "Text": "android.permission.READ_CALLS"
        }, {
          "Id": 103832,
          "Text": "android.permission.READ_CALL"
        }, {
          "Id": 103833,
          "Text": "android.permission.READ_CALL_LOG"
        }, {
          "Id": 103834,
          "Text": "android.permission.READ_HISTORY"
        }]
      }, {
        "Id": 25039,
        "Text": "Trong SQLiteOpenHelper, phương thức nào được gọi khi cơ sở dữ liệu được tạo ra lần đầu tiên?",
        "Marks": 1,
        "AnswerId": 103835,
        "Answers": [{
          "Id": 103835,
          "Text": "onCreate"
        }, {
          "Id": 103836,
          "Text": "onUpgrade"
        }, {
          "Id": 103837,
          "Text": "onResume"
        }, {
          "Id": 103838,
          "Text": "onOpen"
        }]
      }, {
        "Id": 25040,
        "Text": "URI nào được sử dụng lấy thông tin của liên hệ có ID bằng 6?",
        "Marks": 1,
        "AnswerId": 103839,
        "Answers": [{
          "Id": 103839,
          "Text": "content://contacts/people/6"
        }, {
          "Id": 103840,
          "Text": "content://contacts/contact/6"
        }, {
          "Id": 103841,
          "Text": "content://contacts/people/3"
        }, {
          "Id": 103842,
          "Text": "content://contacts/person/6"
        }]
      }, {
        "Id": 25041,
        "Text": "Lệnh database.delete(\"lop\",null,null) sẽ xóa toàn bộ dữ liệu của bảng Lớp?",
        "Marks": 1,
        "AnswerId": 103843,
        "Answers": [{
          "Id": 103843,
          "Text": "Đúng"
        }, {
          "Id": 103844,
          "Text": "array"
        }, {
          "Id": 103845,
          "Text": "cursor"
        }, {
          "Id": 103846,
          "Text": "custom type"
        }, {
          "Id": 103847,
          "Text": "Sai"
        }, {
          "Id": 103848,
          "Text": "String"
        }]
      }, {
        "Id": 25042,
        "Text": "Lớp nào trợ giúp tạo ra cơ sở dữ liệu và phiên bản cho chúng?",
        "Marks": 1,
        "AnswerId": 103852,
        "Answers": [{
          "Id": 103849,
          "Text": "SQLiteCloseHelper"
        }, {
          "Id": 103850,
          "Text": "SQLiteHelper"
        }, {
          "Id": 103851,
          "Text": "SQLiteOpenHelp"
        }, {
          "Id": 103852,
          "Text": "SQLiteOpenHelper"
        }]
      }, {
        "Id": 25043,
        "Text": "Hãy cho biết điều gì xảy ra sau khi chạy các lệnh sau: ContentValues values = new ContentValues(); values.put(\"tensinhvien\",\"abc\"); values.put(\"tuoi\",20); database.insert(tbSinhvien, null, values);",
        "Marks": 1,
        "AnswerId": 103853,
        "Answers": [{
          "Id": 103853,
          "Text": "Chương trình có lỗi khi chạy"
        }, {
          "Id": 103854,
          "Text": "Chương trình có lỗi khi biên dịch"
        }, {
          "Id": 103855,
          "Text": "Chương trình sẽ thêm mới sinh viên có tên là abc và tuổi là 20"
        }, {
          "Id": 103856,
          "Text": "Chương trình sẽ thêm mới sinh viên và các trường có giá trị là rỗng"
        }]
      }, {
        "Id": 25044,
        "Text": "Trong SQLiteOpenHelper, phương thức nào được gọi khi cơ sở dữ liệu được mở?",
        "Marks": 1,
        "AnswerId": 103858,
        "Answers": [{
          "Id": 103857,
          "Text": "upUpgrade"
        }, {
          "Id": 103858,
          "Text": "onOpen"
        }, {
          "Id": 103859,
          "Text": "onCreate"
        }, {
          "Id": 103860,
          "Text": "onResume"
        }]
      }, {
        "Id": 25045,
        "Text": "Hãy cho biết điều gì xảy ra sau khi chạy các lệnh sau: ContentValues values = new ContentValues(); values.put(tensinhvien,abc); values.put(tuoi,30); database.insert(tbSinhvien, null, values);",
        "Marks": 1,
        "AnswerId": 103862,
        "Answers": [{
          "Id": 103861,
          "Text": "Chương trình sẽ thêm mới sinh viên có tên là abc và tuổi là 30"
        }, {
          "Id": 103862,
          "Text": "Chương trình có lỗi khi biên dịch"
        }, {
          "Id": 103863,
          "Text": "Chương trình có lỗi khi chạy"
        }, {
          "Id": 103864,
          "Text": "Chương trình sẽ thêm mới sinh viên và các trường có giá trị là rỗng"
        }]
      }, {
        "Id": 25046,
        "Text": "Lớp SharedPreferences cung cấp một framework để lưu trữ dữ liệu dưới dạng key value?",
        "Marks": 1,
        "AnswerId": 103865,
        "Answers": [{
          "Id": 103865,
          "Text": "Đúng"
        }, {
          "Id": 103866,
          "Text": "Sai"
        }]
      }, {
        "Id": 25047,
        "Text": "Để xóa toàn bộ dữ liệu trong SharePreferences, sử dụng phương thức gì?",
        "Marks": 1,
        "AnswerId": 103870,
        "Answers": [{
          "Id": 103867,
          "Text": "update()"
        }, {
          "Id": 103868,
          "Text": "delete()"
        }, {
          "Id": 103869,
          "Text": "suspend()"
        }, {
          "Id": 103870,
          "Text": "clear()"
        }]
      }, {
        "Id": 25048,
        "Text": "Sử dụng phương thức nào để lấy giá trị có kiểu String từ trong SharePreferences, nếu không có thì để giá trị mặc định là xâu rỗng?",
        "Marks": 1,
        "AnswerId": 103871,
        "Answers": [{
          "Id": 103871,
          "Text": "getString(\"cardnumber\",\"\")"
        }, {
          "Id": 103872,
          "Text": "getInt(\"cardnumber\",\"\")"
        }, {
          "Id": 103873,
          "Text": "getStringValue(\"cardnumber\",\"\")"
        }, {
          "Id": 103874,
          "Text": "gettingString(\"cardnumber\",\"\")"
        }]
      }, {
        "Id": 25049,
        "Text": "Các thông tin được lưu vào bộ nhớ trong sẽ không bị xóa khi ứng dụng bị xóa?",
        "Marks": 1,
        "AnswerId": 103875,
        "Answers": [{
          "Id": 103875,
          "Text": "Sai"
        }, {
          "Id": 103876,
          "Text": "Đúng"
        }]
      }, {
        "Id": 25050,
        "Text": "Khi thiết bị Android thiếu dung lượng, hệ điều hành Android sẽ tự động xóa file cache để dọn dẹp bộ nhớ?",
        "Marks": 1,
        "AnswerId": 103877,
        "Answers": [{
          "Id": 103877,
          "Text": "Đúng"
        }, {
          "Id": 103878,
          "Text": "Sai"
        }]
      }, {
        "Id": 25051,
        "Text": "Ưu điểm của lưu trữ thông tin trên thẻ nhớ so với bộ nhớ trong là bảo mật hơn?",
        "Marks": 1,
        "AnswerId": 103880,
        "Answers": [{
          "Id": 103879,
          "Text": "Đúng"
        }, {
          "Id": 103880,
          "Text": "Sai"
        }]
      }, {
        "Id": 25052,
        "Text": "Mặc định, thông tin lưu trữ trong bộ nhớ trong của ứng dụng Android là riêng tư đối với các ứng dụng khác?",
        "Marks": 1,
        "AnswerId": 103881,
        "Answers": [{
          "Id": 103881,
          "Text": "Đúng"
        }, {
          "Id": 103882,
          "Text": "Sai"
        }]
      }, {
        "Id": 25053,
        "Text": "Sử dụng phương thức nào để lấy đường dẫn đến file test.txt trên SDCard?",
        "Marks": 1,
        "AnswerId": 103885,
        "Answers": [{
          "Id": 103883,
          "Text": "Environment.getExternalStorageDirectory().getPath() + \"/test.txt\""
        }, {
          "Id": 103884,
          "Text": "Environment.getStorageDirectory().getAbsolutePath() + \"/test.txt\""
        }, {
          "Id": 103885,
          "Text": "Environment.getExternalStorageDirectory().getAbsolutePath() + \"/test.txt\""
        }, {
          "Id": 103886,
          "Text": "Environment.getInternalStorageDirectory().getAbsolutePath() + \"/test.txt\""
        }]
      }, {
        "Id": 25054,
        "Text": "File SharePreference được lưu dưới dạng định dạng gì?",
        "Marks": 1,
        "AnswerId": 103889,
        "Answers": [{
          "Id": 103887,
          "Text": "ASP.NET"
        }, {
          "Id": 103888,
          "Text": "HTML5"
        }, {
          "Id": 103889,
          "Text": "XML"
        }, {
          "Id": 103890,
          "Text": "HTML"
        }]
      }, {
        "Id": 25055,
        "Text": "Khi ứng dụng bị đóng, dữ liệu SharedPreferences sẽ tự động bị xóa theo?",
        "Marks": 1,
        "AnswerId": 103891,
        "Answers": [{
          "Id": 103891,
          "Text": "Đúng"
        }, {
          "Id": 103892,
          "Text": "Sai"
        }]
      }, {
        "Id": 25056,
        "Text": "Intent filter được sử dụng để gọi Activity trong chương trình?",
        "Marks": 1,
        "AnswerId": 103893,
        "Answers": [{
          "Id": 103893,
          "Text": "FALSE"
        }, {
          "Id": 103894,
          "Text": "TRUE"
        }]
      }, {
        "Id": 25057,
        "Text": "Để khởi tạo Activity và lấy kết quả trả về, phải sử dụng phương thức nào?",
        "Marks": 1,
        "AnswerId": 103896,
        "Answers": [{
          "Id": 103895,
          "Text": "startActivityResult()"
        }, {
          "Id": 103896,
          "Text": "startActivityForResult()"
        }, {
          "Id": 103897,
          "Text": "startActivity()"
        }, {
          "Id": 103898,
          "Text": "Không có phương thức nào hỗ trợ lấy kết quả trả về khi khởi tạo một Activity"
        }]
      }, {
        "Id": 25058,
        "Text": "Dùng phương thức gì để thêm dữ liệu của Int vào Bundle?",
        "Marks": 1,
        "AnswerId": 103899,
        "Answers": [{
          "Id": 103899,
          "Text": "putInt"
        }, {
          "Id": 103900,
          "Text": "putInteger"
        }, {
          "Id": 103901,
          "Text": "pushInt"
        }, {
          "Id": 103902,
          "Text": "pushInteger"
        }]
      }, {
        "Id": 25059,
        "Text": "Để thực hiện cuộc gọi trong ứng dụng Android, phải sử dụng perrmission gì?",
        "Marks": 1,
        "AnswerId": 103906,
        "Answers": [{
          "Id": 103903,
          "Text": "android.permission.CALL"
        }, {
          "Id": 103904,
          "Text": "android.permission.CALL_TEL"
        }, {
          "Id": 103905,
          "Text": "android.permission.CALLING"
        }, {
          "Id": 103906,
          "Text": "android.permission.CALL_PHONE"
        }]
      }, {
        "Id": 25060,
        "Text": "Trong Bundle,dùng phương thức gì để nhận dữ liệu trả về có kiểu Int?",
        "Marks": 1,
        "AnswerId": 103907,
        "Answers": [{
          "Id": 103907,
          "Text": "getInt"
        }, {
          "Id": 103908,
          "Text": "receiveInteger"
        }, {
          "Id": 103909,
          "Text": "getInteger"
        }, {
          "Id": 103910,
          "Text": "receiveInt"
        }]
      }, {
        "Id": 25061,
        "Text": "Sử dụng đối tượng gì để truyền dữ liệu qua lại giữa các Activity?",
        "Marks": 1,
        "AnswerId": 103911,
        "Answers": [{
          "Id": 103911,
          "Text": "Bundle"
        }, {
          "Id": 103912,
          "Text": "Package"
        }, {
          "Id": 103913,
          "Text": "BundleData"
        }, {
          "Id": 103914,
          "Text": "PackageData"
        }]
      }, {
        "Id": 25062,
        "Text": "Cặp Action/Data dưới đây dùng để làm gì? ACTION_EDIT content://contacts/people/2",
        "Marks": 1,
        "AnswerId": 103916,
        "Answers": [{
          "Id": 103915,
          "Text": "Xem thông tin liên hệ có ID bằng 2"
        }, {
          "Id": 103916,
          "Text": "Sửa thông tin liên hệ có ID bằng 2"
        }, {
          "Id": 103917,
          "Text": "Thêm mới thông tin liên hệ có ID bằng 2"
        }, {
          "Id": 103918,
          "Text": "Xóa thông tin liên hệ có ID bằng 2"
        }]
      }, {
        "Id": 25063,
        "Text": "URI viết tắt của từ gì?",
        "Marks": 1,
        "AnswerId": 103920,
        "Answers": [{
          "Id": 103919,
          "Text": "Uniform Resource Identifying"
        }, {
          "Id": 103920,
          "Text": "Uniform Resource Identifier"
        }, {
          "Id": 103921,
          "Text": "Uniform Resources Identifier"
        }, {
          "Id": 103922,
          "Text": "Unique Resource Identifier"
        }]
      }, {
        "Id": 25064,
        "Text": "Để di chuyển từ Activity này đến Activity khác sử dụng thành phần gì trong Android?",
        "Marks": 1,
        "AnswerId": 103924,
        "Answers": [{
          "Id": 103923,
          "Text": "Activity"
        }, {
          "Id": 103924,
          "Text": "Intent"
        }, {
          "Id": 103925,
          "Text": "Intent Filter"
        }, {
          "Id": 103926,
          "Text": "Content Provider"
        }]
      }, {
        "Id": 25065,
        "Text": "Để chỉ đến các tài nguyên trong máy, ví dụ như xem file mp3, chúng ta phải sử dụng cái gì?",
        "Marks": 1,
        "AnswerId": 103930,
        "Answers": [{
          "Id": 103927,
          "Text": "URF"
        }, {
          "Id": 103928,
          "Text": "URL"
        }, {
          "Id": 103929,
          "Text": "URN"
        }, {
          "Id": 103930,
          "Text": "URI"
        }]
      }, {
        "Id": 25066,
        "Text": "Lớp nào được sử dụng để khởi tạo menu từ file XML menu?",
        "Marks": 1,
        "AnswerId": 103933,
        "Answers": [{
          "Id": 103931,
          "Text": "Menu"
        }, {
          "Id": 103932,
          "Text": "Xmlmenu"
        }, {
          "Id": 103933,
          "Text": "MenuInflater"
        }, {
          "Id": 103934,
          "Text": "MenuInflating"
        }]
      }, {
        "Id": 25067,
        "Text": "Phương thức nào dùng để enable hoặc disable một item trong Menu?",
        "Marks": 1,
        "AnswerId": 103936,
        "Answers": [{
          "Id": 103935,
          "Text": "Các item trong Menu không thể disable"
        }, {
          "Id": 103936,
          "Text": "onPrepareOptionsMenu"
        }, {
          "Id": 103937,
          "Text": "onCreateOptionsMenu"
        }, {
          "Id": 103938,
          "Text": "onShowOptionsMenu"
        }]
      }, {
        "Id": 25068,
        "Text": "Lệnh nào dùng để hiển thị một thông báo trên màn hình?",
        "Marks": 1,
        "AnswerId": 103940,
        "Answers": [{
          "Id": 103939,
          "Text": "Toast.makeText(context, “Message”);"
        }, {
          "Id": 103940,
          "Text": "Toast.makeText(context, “Message”, Toast.LENGTH_SHORT).show();"
        }, {
          "Id": 103941,
          "Text": "Toast.makeText(“Message”, Toast.LENGTH_SHORT).show();"
        }, {
          "Id": 103942,
          "Text": "Toast.makeText(context, “Message”, Toast.LENGTH_SHORT);"
        }, {
          "Id": 103943,
          "Text": "Toast.displayText(“Message”, Toast.LENGTH_SHORT).show();"
        }]
      }, {
        "Id": 25069,
        "Text": "Phương thức setOnCreateContextMenuListener được sử dụng để làm gì?",
        "Marks": 1,
        "AnswerId": 103945,
        "Answers": [{
          "Id": 103944,
          "Text": "Xử lý sự kiện khi một menu item của Context Menu được chọn"
        }, {
          "Id": 103945,
          "Text": "Đăng ký một context menu với một View"
        }, {
          "Id": 103946,
          "Text": "Xử lý sự kiện khi một menu item của Option Menu được chọn"
        }, {
          "Id": 103947,
          "Text": "Đăng ký một option menu với một View"
        }]
      }, {
        "Id": 25070,
        "Text": "Khai báo layout cho XML Menu nằm trong thư mục nào?",
        "Marks": 1,
        "AnswerId": 103948,
        "Answers": [{
          "Id": 103948,
          "Text": "res/menu"
        }, {
          "Id": 103949,
          "Text": "res/values"
        }, {
          "Id": 103950,
          "Text": "res/drawable-hdpi"
        }, {
          "Id": 103951,
          "Text": "res/layout"
        }, {
          "Id": 103952,
          "Text": "res/drawable-ldpi"
        }]
      }, {
        "Id": 25071,
        "Text": "Thư mục nào để chứa layout cho giao diện khi màn hình ở chế độ portrait mode?",
        "Marks": 1,
        "AnswerId": 103956,
        "Answers": [{
          "Id": 103953,
          "Text": "res/values"
        }, {
          "Id": 103954,
          "Text": "res/layout-land"
        }, {
          "Id": 103955,
          "Text": "res/menu"
        }, {
          "Id": 103956,
          "Text": "res/layout"
        }]
      }, {
        "Id": 25072,
        "Text": "Làm thế nào để khi chọn một thông báo notification trên Status Bar, sẽ hiển thị một giao diện tương ứng?",
        "Marks": 1,
        "AnswerId": 103957,
        "Answers": [{
          "Id": 103957,
          "Text": "Tạo một Intent để khởi tạo một Activity khi notification được chọn"
        }, {
          "Id": 103958,
          "Text": "Sử dụng Toast.makeText"
        }, {
          "Id": 103959,
          "Text": "Tạo mới một Diaglog"
        }, {
          "Id": 103960,
          "Text": "Không thể hiển thị một giao diện tương ứng khi chọn một thông báo notification trên Status Bar"
        }]
      }, {
        "Id": 25073,
        "Text": "Câu nào sau đây là đúng?",
        "Marks": 1,
        "AnswerId": 103964,
        "Answers": [{
          "Id": 103961,
          "Text": "Option Menu hỗ trợ checkbox"
        }, {
          "Id": 103962,
          "Text": "Option Menu và Context Menu xuất hiện khi ấn vào phím Menu trên điện thoại"
        }, {
          "Id": 103963,
          "Text": "Option Menu hỗ trợ radiobutton"
        }, {
          "Id": 103964,
          "Text": "Option Menu xuất hiện khi ấn vào phím Menu, Context Menu xuất hiện khi click vào View một vài giây"
        }]
      }, {
        "Id": 25074,
        "Text": "Phương thức nào được sử dụng để xử lý khi một View được click và giữ một lúc?",
        "Marks": 1,
        "AnswerId": 103966,
        "Answers": [{
          "Id": 103965,
          "Text": "setOnTouchListener"
        }, {
          "Id": 103966,
          "Text": "setOnLongClickListener"
        }, {
          "Id": 103967,
          "Text": "setOnKeyListener"
        }, {
          "Id": 103968,
          "Text": "setOnClickListener"
        }]
      }, {
        "Id": 25075,
        "Text": "Để tạo mới một Alert Dialog, chúng ta phải sử dụng lớp nào?",
        "Marks": 1,
        "AnswerId": 103971,
        "Answers": [{
          "Id": 103969,
          "Text": "AlertDialog.Create"
        }, {
          "Id": 103970,
          "Text": "AlertDialog.Building"
        }, {
          "Id": 103971,
          "Text": "AlertDialog.Builder"
        }, {
          "Id": 103972,
          "Text": "AlertDialog.Creating"
        }]
      }, {
        "Id": 25076,
        "Text": "Giá trị mặc định của thuộc tính android:layout_weight là bao nhiêu?",
        "Marks": 1,
        "AnswerId": 103976,
        "Answers": [{
          "Id": 103973,
          "Text": "2"
        }, {
          "Id": 103974,
          "Text": "1"
        }, {
          "Id": 103975,
          "Text": "3"
        }, {
          "Id": 103976,
          "Text": "0"
        }, {
          "Id": 103977,
          "Text": "4"
        }]
      }, {
        "Id": 25077,
        "Text": "Mặc định mỗi dòng trong ListView là gì?",
        "Marks": 1,
        "AnswerId": 103979,
        "Answers": [{
          "Id": 103978,
          "Text": "Button"
        }, {
          "Id": 103979,
          "Text": "TextView"
        }, {
          "Id": 103980,
          "Text": "Spinner"
        }, {
          "Id": 103981,
          "Text": "ProgressBar"
        }]
      }, {
        "Id": 25078,
        "Text": "Thư mục res chứa các thông tin gì?",
        "Marks": 1,
        "AnswerId": 103984,
        "Answers": [{
          "Id": 103982,
          "Text": "File mã nguồn Java"
        }, {
          "Id": 103983,
          "Text": "ứng dụng"
        }, {
          "Id": 103984,
          "Text": "Tài nguyên"
        }, {
          "Id": 103985,
          "Text": "file tĩnh"
        }]
      }, {
        "Id": 25079,
        "Text": "Hàm nào bắt buộc phải gọi trước khi gọi hàm findViewById?",
        "Marks": 1,
        "AnswerId": 103989,
        "Answers": [{
          "Id": 103986,
          "Text": "startActivity"
        }, {
          "Id": 103987,
          "Text": "getMenuInflater().inflate"
        }, {
          "Id": 103988,
          "Text": "super.onCreate"
        }, {
          "Id": 103989,
          "Text": "setContentView"
        }]
      }, {
        "Id": 25080,
        "Text": "Layout nào cho phép bố trí giao diện dưới dạng Tab?",
        "Marks": 1,
        "AnswerId": 103993,
        "Answers": [{
          "Id": 103990,
          "Text": "LinearLayout"
        }, {
          "Id": 103991,
          "Text": "RelativeLayout"
        }, {
          "Id": 103992,
          "Text": "FrameLayout"
        }, {
          "Id": 103993,
          "Text": "TabLayout"
        }]
      }, {
        "Id": 25081,
        "Text": "Giá trị nào của thuộc tính android:layout_width và android:layout_height dùng để xác định View sẽ có chiều rộng và chiều cao bằng đối tượng View cha?",
        "Marks": 1,
        "AnswerId": 103996,
        "Answers": [{
          "Id": 103994,
          "Text": "full_parent"
        }, {
          "Id": 103995,
          "Text": "wrapper_parent"
        }, {
          "Id": 103996,
          "Text": "fill_parent"
        }, {
          "Id": 103997,
          "Text": "wrap_parent"
        }]
      }, {
        "Id": 25082,
        "Text": "File layout nằm trong thư mục nào của Android Project?",
        "Marks": 1,
        "AnswerId": 103998,
        "Answers": [{
          "Id": 103998,
          "Text": "res/drawable-ldpi"
        }, {
          "Id": 103999,
          "Text": "res/values"
        }, {
          "Id": 104000,
          "Text": "res/layout"
        }, {
          "Id": 104001,
          "Text": "res/drawable-hdpi"
        }, {
          "Id": 104002,
          "Text": "res/menu"
        }]
      }, {
        "Id": 25083,
        "Text": "Thay đổi thông tin về theme của ứng dụng, chúng ta thay đổi trong file nào?",
        "Marks": 1,
        "AnswerId": 104003,
        "Answers": [{
          "Id": 104003,
          "Text": "AndroidManifest.xml"
        }, {
          "Id": 104004,
          "Text": "main.xml"
        }, {
          "Id": 104005,
          "Text": "MainActivity.java"
        }, {
          "Id": 104006,
          "Text": "activity_main.xml"
        }]
      }, {
        "Id": 25084,
        "Text": "Tất cả thành phần của chương trình được nhóm trong tag nào của AndroidManifest?",
        "Marks": 1,
        "AnswerId": 104007,
        "Answers": [{
          "Id": 104007,
          "Text": "application"
        }, {
          "Id": 104008,
          "Text": "applications"
        }, {
          "Id": 104009,
          "Text": "permission"
        }, {
          "Id": 104010,
          "Text": "user-permission"
        }]
      }, {
        "Id": 25085,
        "Text": "Layout nào cho phép sắp xếp các view con ở phía trong theo chiều dọc hoặc chiều ngang?",
        "Marks": 1,
        "AnswerId": 104012,
        "Answers": [{
          "Id": 104011,
          "Text": "RelativeLayout"
        }, {
          "Id": 104012,
          "Text": "LinearLayout"
        }, {
          "Id": 104013,
          "Text": "FrameLayout"
        }, {
          "Id": 104014,
          "Text": "TabLayout"
        }]
      }, {
        "Id": 25086,
        "Text": "Lớp nào sau đây là lớp cha của lớp ứng dụng chính của ứng dụng Android (lớp có giao diện người dùng)?",
        "Marks": 1,
        "AnswerId": 104019,
        "Answers": [{
          "Id": 104015,
          "Text": "AppLet"
        }, {
          "Id": 104016,
          "Text": "MIDLet"
        }, {
          "Id": 104017,
          "Text": "AndroidApp"
        }, {
          "Id": 104018,
          "Text": "Application"
        }, {
          "Id": 104019,
          "Text": "Activity"
        }]
      }, {
        "Id": 25087,
        "Text": "Khởi tạo activity bằng cách gọi hàm nào?",
        "Marks": 1,
        "AnswerId": 104021,
        "Answers": [{
          "Id": 104020,
          "Text": "activitiesStart"
        }, {
          "Id": 104021,
          "Text": "startActivity"
        }, {
          "Id": 104022,
          "Text": "activitiesStarting"
        }, {
          "Id": 104023,
          "Text": "activityStarting"
        }, {
          "Id": 104024,
          "Text": "startActivities"
        }, {
          "Id": 104025,
          "Text": "activityStart"
        }]
      }, {
        "Id": 25088,
        "Text": "Phương thức nào thích hợp nhất để lưu các dữ liệu quan trọng?",
        "Marks": 1,
        "AnswerId": 104029,
        "Answers": [{
          "Id": 104026,
          "Text": "Activity.onStop()"
        }, {
          "Id": 104027,
          "Text": "Activity.onFreeze()"
        }, {
          "Id": 104028,
          "Text": "Activity.onDestroy()"
        }, {
          "Id": 104029,
          "Text": "Activity.onPause()"
        }, {
          "Id": 104030,
          "Text": "Activity.onPausing()"
        }]
      }, {
        "Id": 25089,
        "Text": "Để thay đổi biểu tưởng của ứng dụng trong launcher, chúng ta phải thay đổi file nào?",
        "Marks": 1,
        "AnswerId": 104034,
        "Answers": [{
          "Id": 104031,
          "Text": "start.png"
        }, {
          "Id": 104032,
          "Text": "starts.png"
        }, {
          "Id": 104033,
          "Text": "icons.png"
        }, {
          "Id": 104034,
          "Text": "icon.png"
        }, {
          "Id": 104035,
          "Text": "app.png"
        }]
      }, {
        "Id": 25090,
        "Text": "SubActivity là gì?",
        "Marks": 1,
        "AnswerId": 104036,
        "Answers": [{
          "Id": 104036,
          "Text": "Là activity được gọi bởi activity khác"
        }, {
          "Id": 104037,
          "Text": "Là activity con"
        }, {
          "Id": 104038,
          "Text": "Là activity của hệ thống"
        }, {
          "Id": 104039,
          "Text": "Là activity hiện tại đang hiển thị trên màn hình điện thoại"
        }, {
          "Id": 104040,
          "Text": "Là activity đang bị tạm dừng"
        }]
      }, {
        "Id": 25091,
        "Text": "Phương thức nào được gọi khi activity đầu tiên được tạo?",
        "Marks": 1,
        "AnswerId": 104044,
        "Answers": [{
          "Id": 104041,
          "Text": "onPause()"
        }, {
          "Id": 104042,
          "Text": "onDestroy()"
        }, {
          "Id": 104043,
          "Text": "onCreating()"
        }, {
          "Id": 104044,
          "Text": "onCreate()"
        }, {
          "Id": 104045,
          "Text": "onPausing()"
        }, {
          "Id": 104046,
          "Text": "onDestroying()"
        }]
      }, {
        "Id": 25092,
        "Text": "File nào chứa thông tin tên ứng dụng, version android tối thiểu mà ứng dụng đòi hỏi?",
        "Marks": 1,
        "AnswerId": 104049,
        "Answers": [{
          "Id": 104047,
          "Text": "activity_main.xml"
        }, {
          "Id": 104048,
          "Text": "string.xml"
        }, {
          "Id": 104049,
          "Text": "AndroidManifest.xml"
        }, {
          "Id": 104050,
          "Text": "R.java"
        }]
      }, {
        "Id": 25093,
        "Text": "File nào có chứa các thông tin Resource ID dùng để truy cập đến các tài nguyên (drawable, layout, styles, string)?",
        "Marks": 1,
        "AnswerId": 104055,
        "Answers": [{
          "Id": 104051,
          "Text": "Resource.java"
        }, {
          "Id": 104052,
          "Text": "strings.java"
        }, {
          "Id": 104053,
          "Text": "style.java"
        }, {
          "Id": 104054,
          "Text": "Resources.java"
        }, {
          "Id": 104055,
          "Text": "R.java"
        }, {
          "Id": 104056,
          "Text": "string.java"
        }]
      }, {
        "Id": 25094,
        "Text": "Phương thức nào là phương thức không đồng bộ?",
        "Marks": 1,
        "AnswerId": 104061,
        "Answers": [{
          "Id": 104057,
          "Text": "startedActivityForResult"
        }, {
          "Id": 104058,
          "Text": "startActivitiesForResult"
        }, {
          "Id": 104059,
          "Text": "startingActivitiesForResult"
        }, {
          "Id": 104060,
          "Text": "startingActivityForResult"
        }, {
          "Id": 104061,
          "Text": "startActivityForResult"
        }, {
          "Id": 104062,
          "Text": "startedActivitiesForResult"
        }]
      }, {
        "Id": 25095,
        "Text": "Android manifest là file có định dạng gì?",
        "Marks": 1,
        "AnswerId": 104064,
        "Answers": [{
          "Id": 104063,
          "Text": "Java"
        }, {
          "Id": 104064,
          "Text": "XML"
        }, {
          "Id": 104065,
          "Text": "HTML5"
        }, {
          "Id": 104066,
          "Text": "HTML"
        }, {
          "Id": 104067,
          "Text": "C#"
        }]
      }, {
        "Id": 25096,
        "Text": "Công nghệ máy ảo nào do Google tạo ra cho hệ điều hành Android?",
        "Marks": 1,
        "AnswerId": 104071,
        "Answers": [{
          "Id": 104068,
          "Text": "VMWare"
        }, {
          "Id": 104069,
          "Text": "Virtual Box"
        }, {
          "Id": 104070,
          "Text": "Virtual Driver"
        }, {
          "Id": 104071,
          "Text": "Dalvik Virtual Machine"
        }]
      }, {
        "Id": 25097,
        "Text": "Trong quá trình biên dịch, android project được biên dịch và đóng gói thành file có đuôi gì?",
        "Marks": 1,
        "AnswerId": 104075,
        "Answers": [{
          "Id": 104072,
          "Text": "exe"
        }, {
          "Id": 104073,
          "Text": "dex"
        }, {
          "Id": 104074,
          "Text": "bat"
        }, {
          "Id": 104075,
          "Text": "apk"
        }]
      }, {
        "Id": 25098,
        "Text": "Các ứng dụng trên android được viết bằng ngôn ngữ nào?",
        "Marks": 1,
        "AnswerId": 104080,
        "Answers": [{
          "Id": 104076,
          "Text": "Python"
        }, {
          "Id": 104077,
          "Text": "VB.NET"
        }, {
          "Id": 104078,
          "Text": "C#"
        }, {
          "Id": 104079,
          "Text": "C++"
        }, {
          "Id": 104080,
          "Text": "Java"
        }, {
          "Id": 104081,
          "Text": "PHP"
        }]
      }, {
        "Id": 25099,
        "Text": "IDE nào không dùng để phát triển ứng dụng trên Android?",
        "Marks": 1,
        "AnswerId": 104084,
        "Answers": [{
          "Id": 104082,
          "Text": "Net Bean"
        }, {
          "Id": 104083,
          "Text": "Eclipse"
        }, {
          "Id": 104084,
          "Text": "Visual Studio"
        }, {
          "Id": 104085,
          "Text": "Android Studio"
        }]
      }, {
        "Id": 25100,
        "Text": "Các ứng dụng trên android được chuyển sang định dạng file gì để có thể chạy được trên máy ảo Dalvik?",
        "Marks": 1,
        "AnswerId": 104090,
        "Answers": [{
          "Id": 104086,
          "Text": "zar"
        }, {
          "Id": 104087,
          "Text": "exe"
        }, {
          "Id": 104088,
          "Text": "bat"
        }, {
          "Id": 104089,
          "Text": "zip"
        }, {
          "Id": 104090,
          "Text": "dex"
        }]
      }, {
        "Id": 25101,
        "Text": "Phiên bản android nào có tên là Ice Cream Sandwich?",
        "Marks": 1,
        "AnswerId": 104091,
        "Answers": [{
          "Id": 104091,
          "Text": "4"
        }, {
          "Id": 104092,
          "Text": "2"
        }, {
          "Id": 104093,
          "Text": "3"
        }, {
          "Id": 104094,
          "Text": "4.4"
        }, {
          "Id": 104095,
          "Text": "1.5"
        }, {
          "Id": 104096,
          "Text": "1"
        }]
      }, {
        "Id": 25102,
        "Text": "Plugin nào được sử dụng với Eclipse để phát triển ứng dụng android?",
        "Marks": 1,
        "AnswerId": 104097,
        "Answers": [{
          "Id": 104097,
          "Text": "ADT plugin"
        }, {
          "Id": 104098,
          "Text": "ADF plugin"
        }, {
          "Id": 104099,
          "Text": "ADU plugin"
        }, {
          "Id": 104100,
          "Text": "ADG plugin"
        }]
      }, {
        "Id": 25103,
        "Text": "Android Studio do công ty nào tạo ra?",
        "Marks": 1,
        "AnswerId": 104103,
        "Answers": [{
          "Id": 104101,
          "Text": "HTC"
        }, {
          "Id": 104102,
          "Text": "Amazon"
        }, {
          "Id": 104103,
          "Text": "Google"
        }, {
          "Id": 104104,
          "Text": "Samsung"
        }, {
          "Id": 104105,
          "Text": "Yahoo"
        }, {
          "Id": 104106,
          "Text": "Nokia"
        }]
      }, {
        "Id": 25104,
        "Text": "Hiện tại nền tảng mobile nào có số lượng người dùng cao nhất?",
        "Marks": 1,
        "AnswerId": 104109,
        "Answers": [{
          "Id": 104107,
          "Text": "Tizen OS"
        }, {
          "Id": 104108,
          "Text": "Symbian"
        }, {
          "Id": 104109,
          "Text": "Android"
        }, {
          "Id": 104110,
          "Text": "Firefox OS"
        }, {
          "Id": 104111,
          "Text": "Window Phone"
        }, {
          "Id": 104112,
          "Text": "iOS"
        }]
      }, {
        "Id": 25105,
        "Text": "Hãng điện thoại nào đang là hãng sản xuất nhiều nhất điện thoại sử dụng hệ điều hành Android?",
        "Marks": 1,
        "AnswerId": 104117,
        "Answers": [{
          "Id": 104113,
          "Text": "Motorola"
        }, {
          "Id": 104114,
          "Text": "Lenovo"
        }, {
          "Id": 104115,
          "Text": "LG"
        }, {
          "Id": 104116,
          "Text": "HTC"
        }, {
          "Id": 104117,
          "Text": "Samsung"
        }]
      }]
    },
    {
      "Id": "ADTE",
      "quiz": [{
        "Id": 25262,
        "Text": "Kiểm thử nào không nằm trong kiểm thử hệ thống?",
        "Marks": 1,
        "AnswerId": 104715,
        "Answers": [{
          "Id": 104712,
          "Text": "Installation tests"
        }, {
          "Id": 104713,
          "Text": "Performance tests"
        }, {
          "Id": 104714,
          "Text": "GUI tests"
        }, {
          "Id": 104715,
          "Text": "Unit test"
        }]
      }, {
        "Id": 25263,
        "Text": "Kiểm thử nào được sử dụng để kiểm thử hoạt động của các thành phần khi chúng làm việc chung với nhau?",
        "Marks": 1,
        "AnswerId": 104717,
        "Answers": [{
          "Id": 104716,
          "Text": "Kiểm thử đơn vị"
        }, {
          "Id": 104717,
          "Text": "Kiểm thử tích hợp"
        }, {
          "Id": 104718,
          "Text": "Kiểm thử chấp nhận"
        }, {
          "Id": 104719,
          "Text": "Kiểm thử giao diện"
        }]
      }, {
        "Id": 25264,
        "Text": "Android sử dụng Framework nào để kiểm thử đơn vị?",
        "Marks": 1,
        "AnswerId": 104720,
        "Answers": [{
          "Id": 104720,
          "Text": "JUnit"
        }, {
          "Id": 104721,
          "Text": "FUnit"
        }, {
          "Id": 104722,
          "Text": "NUnit"
        }, {
          "Id": 104723,
          "Text": "AUnit"
        }]
      }, {
        "Id": 25265,
        "Text": "Trong JUnit, phương thức nào được sử dụng để kiểm tra một giá trị có phải Null hay không?",
        "Marks": 1,
        "AnswerId": 104727,
        "Answers": [{
          "Id": 104724,
          "Text": "confirmNull"
        }, {
          "Id": 104725,
          "Text": "assertNulls"
        }, {
          "Id": 104726,
          "Text": "confirmNulls"
        }, {
          "Id": 104727,
          "Text": "assertNull"
        }]
      }, {
        "Id": 25266,
        "Text": "Trong JUnit test case, phương thức nào được sử dụng để tạo đối tượng và khởi tạo giá trị cho các đối tượng?",
        "Marks": 1,
        "AnswerId": 104729,
        "Answers": [{
          "Id": 104728,
          "Text": "tearingDown()"
        }, {
          "Id": 104729,
          "Text": "setUp()"
        }, {
          "Id": 104730,
          "Text": "settingUp()"
        }, {
          "Id": 104731,
          "Text": "tearDown()"
        }]
      }, {
        "Id": 25267,
        "Text": "Kiểm tra việc lưu thông tin trạng thái của Activity trong phương thức nào?",
        "Marks": 1,
        "AnswerId": 104733,
        "Answers": [{
          "Id": 104732,
          "Text": "onSearchRequested"
        }, {
          "Id": 104733,
          "Text": "onPause"
        }, {
          "Id": 104734,
          "Text": "onKeyUp"
        }, {
          "Id": 104735,
          "Text": "onNavigateUp"
        }]
      }, {
        "Id": 25268,
        "Text": "Lớp nào không nằm trong gói android.test.mock?",
        "Marks": 1,
        "AnswerId": 104740,
        "Answers": [{
          "Id": 104736,
          "Text": "MockContext"
        }, {
          "Id": 104737,
          "Text": "MockContentResolver"
        }, {
          "Id": 104738,
          "Text": "MockCursor"
        }, {
          "Id": 104739,
          "Text": "MockContentProvider"
        }, {
          "Id": 104740,
          "Text": "MockResource"
        }]
      }, {
        "Id": 25269,
        "Text": "Trong JUnit, phương thức nào được sử dụng để so sánh hai giá trị có bằng nhau hay không?",
        "Marks": 1,
        "AnswerId": 104742,
        "Answers": [{
          "Id": 104741,
          "Text": "assertEqual"
        }, {
          "Id": 104742,
          "Text": "assertEquals"
        }, {
          "Id": 104743,
          "Text": "confirmEqual"
        }, {
          "Id": 104744,
          "Text": "confirmEquals"
        }]
      }, {
        "Id": 25270,
        "Text": "Phương thức nào được chạy trước tất cả test case?",
        "Marks": 1,
        "AnswerId": 104746,
        "Answers": [{
          "Id": 104745,
          "Text": "tearDown()"
        }, {
          "Id": 104746,
          "Text": "setUp()"
        }, {
          "Id": 104747,
          "Text": "settingUp()"
        }, {
          "Id": 104748,
          "Text": "tearingDown()"
        }]
      }, {
        "Id": 25271,
        "Text": "Kiểm thử đơn vị được thực hiện bởi ai trong nhóm phát triển?",
        "Marks": 1,
        "AnswerId": 104751,
        "Answers": [{
          "Id": 104749,
          "Text": "Tester"
        }, {
          "Id": 104750,
          "Text": "QA"
        }, {
          "Id": 104751,
          "Text": "Lập trình viên"
        }, {
          "Id": 104752,
          "Text": "Product Owner"
        }]
      }, {
        "Id": 25272,
        "Text": "Đoạn code sau có ý nghĩa gì?SecondActivity startedActivity = (SecondActivity)monitor. waitForActivityWithTimeout(2000);",
        "Marks": 1,
        "AnswerId": 104755,
        "Answers": [{
          "Id": 104753,
          "Text": "Khởi tạo SecondActivity. Nếu sau 2 milliseconds, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL"
        }, {
          "Id": 104754,
          "Text": "Khởi tạo SecondActivity. Nếu sau 2 giờ, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL"
        }, {
          "Id": 104755,
          "Text": "Khởi tạo SecondActivity. Nếu sau 2 giây, SecondActivity không được khởi tạo thì sẽ trả lại giá trị NULL"
        }, {
          "Id": 104756,
          "Text": "Khởi tạo SecondActivity"
        }]
      }, {
        "Id": 25273,
        "Text": "Lớp nào hỗ trợ để sinh ra các sự kiện touch event?",
        "Marks": 1,
        "AnswerId": 104760,
        "Answers": [{
          "Id": 104757,
          "Text": "TouchLibraries"
        }, {
          "Id": 104758,
          "Text": "TouchUtil"
        }, {
          "Id": 104759,
          "Text": "TouchLibrary"
        }, {
          "Id": 104760,
          "Text": "TouchUtils"
        }]
      }, {
        "Id": 25274,
        "Text": "Để gửi các sự kiện tới giao diện người dùng từ chương trình Android khi kiểm thử phải sử dụng công cụ nào?",
        "Marks": 1,
        "AnswerId": 104764,
        "Answers": [{
          "Id": 104761,
          "Text": "JUnit"
        }, {
          "Id": 104762,
          "Text": "Nunit"
        }, {
          "Id": 104763,
          "Text": "Ant"
        }, {
          "Id": 104764,
          "Text": "Instrumentation"
        }]
      }, {
        "Id": 25275,
        "Text": "Phương thức nào của ViewAsserts được dùng để kiểm tra xem View có nằm trên màn hình hay không?",
        "Marks": 1,
        "AnswerId": 104768,
        "Answers": [{
          "Id": 104765,
          "Text": "assertOffScreenAbove"
        }, {
          "Id": 104766,
          "Text": "assertOffScreenBelow"
        }, {
          "Id": 104767,
          "Text": "assertOffScreen"
        }, {
          "Id": 104768,
          "Text": "assertOnScreen"
        }]
      }, {
        "Id": 25276,
        "Text": "Đối với lớp kiểm thử SingleLaunchActivityTestCase, để lấy thông tin Activity sử dụng phương thức nào?",
        "Marks": 1,
        "AnswerId": 104770,
        "Answers": [{
          "Id": 104769,
          "Text": "getActivities()"
        }, {
          "Id": 104770,
          "Text": "getActivity()"
        }, {
          "Id": 104771,
          "Text": "getCurrentActivitiy()"
        }, {
          "Id": 104772,
          "Text": "getRecentActivitiy()"
        }]
      }, {
        "Id": 25277,
        "Text": "Trước khi xuất bản ứng dụng lên Google Play, chúng ta nên kiểm tra ứng dụng trên các loại thiết bị nào?",
        "Marks": 1,
        "AnswerId": 104774,
        "Answers": [{
          "Id": 104773,
          "Text": "Chỉ cần kiểm tra ứng dụng trên Emulator"
        }, {
          "Id": 104774,
          "Text": "Kiểm tra thiết bị trên mọi kích thước màn hình và trên các màn hình với mật độ điểm ảnh khác nhau"
        }, {
          "Id": 104775,
          "Text": "Kiểm tra ứng dụng trên Galaxy S4"
        }, {
          "Id": 104776,
          "Text": "Kiểm tra ứng dụng trên Galaxy Tab"
        }]
      }, {
        "Id": 25278,
        "Text": "Lớp kiểm thử nào chỉ cho phép gọi các phương thức setUp và tearDown một lần duy nhất, thay vì gọi 2 phương thức này trong các lần thực hiện gọi phương thức kiểm thử?",
        "Marks": 1,
        "AnswerId": 104777,
        "Answers": [{
          "Id": 104777,
          "Text": "SingleLaunchActivityTestCase"
        }, {
          "Id": 104778,
          "Text": "ActivityUnitTestCase"
        }, {
          "Id": 104779,
          "Text": "ActivityUnitTestCase2"
        }, {
          "Id": 104780,
          "Text": "SingleLaunchActivityTestCase2"
        }]
      }, {
        "Id": 25279,
        "Text": "Phương thức nào của ViewAsserts được dùng để kiểm tra xem view cụ thể có nằm trong một ViewGroup hay không?",
        "Marks": 1,
        "AnswerId": 104781,
        "Answers": [{
          "Id": 104781,
          "Text": "assertGroupContains"
        }, {
          "Id": 104782,
          "Text": "assertGroupContain"
        }, {
          "Id": 104783,
          "Text": "assertViewContains"
        }, {
          "Id": 104784,
          "Text": "assertViewContains"
        }]
      }, {
        "Id": 25280,
        "Text": "Phương thức nào của ActivityMonitor dùng để kiểm tra xem ActivityMonitor có cho phép Activity chạy không?",
        "Marks": 1,
        "AnswerId": 104785,
        "Answers": [{
          "Id": 104785,
          "Text": "isBlocking"
        }, {
          "Id": 104786,
          "Text": "isPreventing"
        }, {
          "Id": 104787,
          "Text": "isStopping"
        }, {
          "Id": 104788,
          "Text": "isLocking"
        }]
      }, {
        "Id": 25281,
        "Text": "Lớp nào được sử dụng để gửi Intent giả lập tới Activity khi kiểm thử?",
        "Marks": 1,
        "AnswerId": 104789,
        "Answers": [{
          "Id": 104789,
          "Text": "ActivityInstrumentationTestcase2"
        }, {
          "Id": 104790,
          "Text": "ActivityUnitTestCase"
        }, {
          "Id": 104791,
          "Text": "ActivityInstrumentationTestcase"
        }, {
          "Id": 104792,
          "Text": "ActivityUnitTestCase2"
        }]
      }, {
        "Id": 25282,
        "Text": "Thư viện nào hỗ trợ kiểm thử giao diện tự động?",
        "Marks": 1,
        "AnswerId": 104796,
        "Answers": [{
          "Id": 104793,
          "Text": "uiautomation"
        }, {
          "Id": 104794,
          "Text": "uiautomating"
        }, {
          "Id": 104795,
          "Text": "uiautomate"
        }, {
          "Id": 104796,
          "Text": "uiautomator"
        }]
      }, {
        "Id": 25283,
        "Text": "Công cụ uiautomatorviewer dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 104797,
        "Answers": [{
          "Id": 104797,
          "Text": "Hỗ trợ quét và phân tích giao diện của ứng dụng chạy trên thiết bị thật"
        }, {
          "Id": 104798,
          "Text": "Hỗ trợ quét và phân tích giao diện của ứng dụng chạy trên máy ảo"
        }, {
          "Id": 104799,
          "Text": "Hỗ trợ quét và phân tích các thành phần của ContentProvider"
        }, {
          "Id": 104800,
          "Text": "Hỗ trợ quét và phân tích các thành phần của Service"
        }]
      }, {
        "Id": 25284,
        "Text": "Lớp nào không phải lớp có sẵn của uiautomator API?",
        "Marks": 1,
        "AnswerId": 104802,
        "Answers": [{
          "Id": 104801,
          "Text": "UiScrollable"
        }, {
          "Id": 104802,
          "Text": "UiSelectors"
        }, {
          "Id": 104803,
          "Text": "UiObject"
        }, {
          "Id": 104804,
          "Text": "UiDevice"
        }]
      }, {
        "Id": 25285,
        "Text": "Sử dụng lệnh nào để cài đặt file JAR vào thiết bị kiểm thử?",
        "Marks": 1,
        "AnswerId": 104808,
        "Answers": [{
          "Id": 104805,
          "Text": "adb pull"
        }, {
          "Id": 104806,
          "Text": "android push"
        }, {
          "Id": 104807,
          "Text": "android pull"
        }, {
          "Id": 104808,
          "Text": "adb push"
        }]
      }, {
        "Id": 25286,
        "Text": "Lệnh nào trong Window để thiết lập biến ANDROID_HOME?",
        "Marks": 1,
        "AnswerId": 104809,
        "Answers": [{
          "Id": 104809,
          "Text": "set ANDROID_HOME="
        }, {
          "Id": 104810,
          "Text": "set path ANDROID_HOME="
        }, {
          "Id": 104811,
          "Text": "setting up ANDROID_HOME="
        }, {
          "Id": 104812,
          "Text": "set up ANDROID_HOME="
        }]
      }, {
        "Id": 25287,
        "Text": "Ngoại lệ UiAutomatorObjectNotFoundException xuất hiện khi nào?",
        "Marks": 1,
        "AnswerId": 104814,
        "Answers": [{
          "Id": 104813,
          "Text": "Có nhiều phần tử UI thỏa mãn điều kiện tìm kiếm"
        }, {
          "Id": 104814,
          "Text": "Không có phần tử UI nào thỏa mãn điều kiện tìm kiếm"
        }, {
          "Id": 104815,
          "Text": "Không có phần tử TextView nào thỏa mãn điều kiện tìm kiếm"
        }, {
          "Id": 104816,
          "Text": "Có nhiều phần tử UI thỏa mãn điều kiện tìm kiếm"
        }]
      }, {
        "Id": 25288,
        "Text": "Phải bổ sung thư viện Junit nào để có thể kiểm thử được giao diện?",
        "Marks": 1,
        "AnswerId": 104820,
        "Answers": [{
          "Id": 104817,
          "Text": "Junit1"
        }, {
          "Id": 104818,
          "Text": "Junit5"
        }, {
          "Id": 104819,
          "Text": "Junit2"
        }, {
          "Id": 104820,
          "Text": "Junit3"
        }]
      }, {
        "Id": 25289,
        "Text": "Lệnh sau dùng để làm gì?UiObject cancelButton = new UiObject(new UiSelector().text(\"Cancel\") .className(\"android.widget.Button\"));",
        "Marks": 1,
        "AnswerId": 104822,
        "Answers": [{
          "Id": 104821,
          "Text": "Tìm kiếm Button có giá trị description là Cancel"
        }, {
          "Id": 104822,
          "Text": "Tìm kiếm Button có giá trị text là Cancel"
        }, {
          "Id": 104823,
          "Text": "Tìm kiếm tất cả control có giá trị text là Cancel"
        }, {
          "Id": 104824,
          "Text": "Tìm kiếm Button có giá trị resource-id là Cancel"
        }]
      }, {
        "Id": 25290,
        "Text": "Để kiểm thử giao diện trên Android sử dụng uiautomator, phải tạo project kiểu gì?",
        "Marks": 1,
        "AnswerId": 104826,
        "Answers": [{
          "Id": 104825,
          "Text": "Android Project"
        }, {
          "Id": 104826,
          "Text": "Java Project"
        }, {
          "Id": 104827,
          "Text": "Java Testing Project"
        }, {
          "Id": 104828,
          "Text": "Android Testing Project"
        }]
      }, {
        "Id": 25291,
        "Text": "Đối với EditText nên cung cấp thuộc tính nào để phục vụ kiểm thử giao diện?",
        "Marks": 1,
        "AnswerId": 104831,
        "Answers": [{
          "Id": 104829,
          "Text": "android:key"
        }, {
          "Id": 104830,
          "Text": "android:caption"
        }, {
          "Id": 104831,
          "Text": "android:hint"
        }, {
          "Id": 104832,
          "Text": "android:id"
        }]
      }, {
        "Id": 25292,
        "Text": "Khi kiểm thử Service, nếu override phương thức tearDown, phải gọi phương thức nào ở cuối phương thức tearDown?",
        "Marks": 1,
        "AnswerId": 104835,
        "Answers": [{
          "Id": 104833,
          "Text": "super.tearUp()"
        }, {
          "Id": 104834,
          "Text": "super.settingUp()"
        }, {
          "Id": 104835,
          "Text": "super.tearDown()"
        }, {
          "Id": 104836,
          "Text": "super.setUp()"
        }]
      }, {
        "Id": 25293,
        "Text": "Lớp nào cung cấp đối tượng giả lập Application?",
        "Marks": 1,
        "AnswerId": 104840,
        "Answers": [{
          "Id": 104837,
          "Text": "ApplicationMock"
        }, {
          "Id": 104838,
          "Text": "Application"
        }, {
          "Id": 104839,
          "Text": "MockApplications"
        }, {
          "Id": 104840,
          "Text": "MockApplication"
        }]
      }, {
        "Id": 25294,
        "Text": "Khi kiểm thử Service, người phát triển nên lưu ý điều gì?",
        "Marks": 1,
        "AnswerId": 104842,
        "Answers": [{
          "Id": 104841,
          "Text": "Không được kiểm thử các logic nghiệp vụ"
        }, {
          "Id": 104842,
          "Text": "Nên kiểm thử lời gọi dừng Service"
        }, {
          "Id": 104843,
          "Text": "Không được kiểm thử lời gọi dừng Service"
        }, {
          "Id": 104844,
          "Text": "Không nên sử dụng MockApplication khi kiểm thử"
        }]
      }, {
        "Id": 25295,
        "Text": "Khi kiểm thử IntentService, phải sử dụng phương thức nào để kích hoạt gọi phương thức onHandleIntent?",
        "Marks": 1,
        "AnswerId": 104845,
        "Answers": [{
          "Id": 104845,
          "Text": "TimeUnit.Seconds.sleep"
        }, {
          "Id": 104846,
          "Text": "TimeUnit.Seconds.waiting"
        }, {
          "Id": 104847,
          "Text": "TimeUnit.Seconds.toHours"
        }, {
          "Id": 104848,
          "Text": "TimeUnit.Seconds.valueOf"
        }]
      }, {
        "Id": 25296,
        "Text": "Phương thức nào được sử dụng để truyền đối tượng giả lập MockContext vào Service",
        "Marks": 1,
        "AnswerId": 104849,
        "Answers": [{
          "Id": 104849,
          "Text": "setContext"
        }, {
          "Id": 104850,
          "Text": "setContextObjects"
        }, {
          "Id": 104851,
          "Text": "setContextObject"
        }, {
          "Id": 104852,
          "Text": "setContexts"
        }]
      }, {
        "Id": 25297,
        "Text": "Lớp ProviderTestCase2 kế thừa lớp nào?",
        "Marks": 1,
        "AnswerId": 104855,
        "Answers": [{
          "Id": 104853,
          "Text": "AndroidTestCase2"
        }, {
          "Id": 104854,
          "Text": "AndroidTestCase3"
        }, {
          "Id": 104855,
          "Text": "AndroidTestCase"
        }, {
          "Id": 104856,
          "Text": "AndroidTestCase1"
        }]
      }, {
        "Id": 25298,
        "Text": "Khởi tạo lớp kiểm thử được thực hiện trong hàm nào?",
        "Marks": 1,
        "AnswerId": 104858,
        "Answers": [{
          "Id": 104857,
          "Text": "Hàm IsolatedContext của ProviderTestCase2"
        }, {
          "Id": 104858,
          "Text": "Hàm tạo của ProviderTestCase2"
        }, {
          "Id": 104859,
          "Text": "Hàm MockContentResolver của ProviderTestCase2"
        }, {
          "Id": 104860,
          "Text": "Hàm MockContentResolver của ProviderTestCase2"
        }]
      }, {
        "Id": 25299,
        "Text": "Phương thức ServiceTestCase.bindService() trả về đối tượng kiểu gì?",
        "Marks": 1,
        "AnswerId": 104864,
        "Answers": [{
          "Id": 104861,
          "Text": "int"
        }, {
          "Id": 104862,
          "Text": "String"
        }, {
          "Id": 104863,
          "Text": "Boolean"
        }, {
          "Id": 104864,
          "Text": "iBinder"
        }]
      }, {
        "Id": 25300,
        "Text": "Lớp nào cung cấp các phương thức kiểm thử ContentProvider?",
        "Marks": 1,
        "AnswerId": 104866,
        "Answers": [{
          "Id": 104865,
          "Text": "ContentProviderTestCase"
        }, {
          "Id": 104866,
          "Text": "ProviderTestCase2"
        }, {
          "Id": 104867,
          "Text": "ProviderTestCase"
        }, {
          "Id": 104868,
          "Text": "ContentProviderTestCase2"
        }]
      }, {
        "Id": 25301,
        "Text": "Điều gì nên làm khi kiểm thử ContentProvider?",
        "Marks": 1,
        "AnswerId": 104871,
        "Answers": [{
          "Id": 104869,
          "Text": "Không nên kiểm thử URI không hợp lệ"
        }, {
          "Id": 104870,
          "Text": "Không nên kiểm thử hằng số mà ContentProvider cung cấp"
        }, {
          "Id": 104871,
          "Text": "Kiểm thử tất cả URI mà ContentProvider cung cấp"
        }, {
          "Id": 104872,
          "Text": "Kiểm thử URI truy vấn và URI cập nhật"
        }]
      }, {
        "Id": 25302,
        "Text": "Làm thế nào để gửi sự kiện click vào nút BACK?",
        "Marks": 1,
        "AnswerId": 104875,
        "Answers": [{
          "Id": 104873,
          "Text": "Gọi phương thức goBackButton của lớp Solo2"
        }, {
          "Id": 104874,
          "Text": "Gọi phương thức goBackButton của lớp Solo"
        }, {
          "Id": 104875,
          "Text": "Gọi phương thức goBack của lớp Solo"
        }, {
          "Id": 104876,
          "Text": "Gọi phương thức goBack của lớp Solo2"
        }]
      }, {
        "Id": 25303,
        "Text": "Phương thức nào được sử dụng để tìm kiếm Fragment theo ID?",
        "Marks": 1,
        "AnswerId": 104880,
        "Answers": [{
          "Id": 104877,
          "Text": "getCurrentActivity().getFragment() .findFragmentById"
        }, {
          "Id": 104878,
          "Text": "getCurrentActivity().findFragmentById"
        }, {
          "Id": 104879,
          "Text": "getActivity().getFragmentManager() .findFragmentById"
        }, {
          "Id": 104880,
          "Text": "getCurrentActivity().getFragmentManager() .findFragmentById"
        }]
      }, {
        "Id": 25304,
        "Text": "Làm thế nào để sử dụng Robotium để kiểm thử ứng dụng Android?",
        "Marks": 1,
        "AnswerId": 104881,
        "Answers": [{
          "Id": 104881,
          "Text": "Sử dụng file JAR robotium tải trên trang http://code.google.com/p/robotium/"
        }, {
          "Id": 104882,
          "Text": "Sử dụng file JAR robotium tải trên trang android.google.com/robotium"
        }, {
          "Id": 104883,
          "Text": "Chỉ cần sử dụng android testing framework"
        }, {
          "Id": 104884,
          "Text": "Chỉ cần sử dụng KitKat SDK"
        }]
      }, {
        "Id": 25305,
        "Text": "Làm thế nào để gửi sự kiện click vào nút MENU trên thiết bị?",
        "Marks": 1,
        "AnswerId": 104888,
        "Answers": [{
          "Id": 104885,
          "Text": "Gọi hàm sendKeys(Solo.MENU)"
        }, {
          "Id": 104886,
          "Text": "Gọi hàm sendMenus(Solo.MENU)"
        }, {
          "Id": 104887,
          "Text": "Gọi hàm sendMenu(Solo.MENU)"
        }, {
          "Id": 104888,
          "Text": "Gọi hàm sendKey(Solo.MENU)"
        }]
      }, {
        "Id": 25306,
        "Text": "Làm thế nào để kiểm tra activity hiện tại có phải là Activity SecondActivity hay không?",
        "Marks": 1,
        "AnswerId": 104890,
        "Answers": [{
          "Id": 104889,
          "Text": "Gọi phương thức assertCurrentActivity(\"wrong activity\", SecondActivity) của lớp Solo"
        }, {
          "Id": 104890,
          "Text": "Gọi phương thức assertCurrentActivity(\"wrong activity\", SecondActivity.class) của lớp Solo"
        }, {
          "Id": 104891,
          "Text": "Gọi phương thức assertActivity(\"wrong activity\", Activity.class) của lớp Solo"
        }, {
          "Id": 104892,
          "Text": "Gọi phương thức assertCurrentActivity(\"wrong activity\", Activity.class) của lớp Solo"
        }]
      }, {
        "Id": 25307,
        "Text": "Chọn chức năng nào của Robotium Recorder để ghi lại tọa độ màn hình khi kiểm thử?",
        "Marks": 1,
        "AnswerId": 104896,
        "Answers": [{
          "Id": 104893,
          "Text": "Click and drag"
        }, {
          "Id": 104894,
          "Text": "sleep"
        }, {
          "Id": 104895,
          "Text": "Identify class over string"
        }, {
          "Id": 104896,
          "Text": "Click and drag coordinate"
        }]
      }, {
        "Id": 25308,
        "Text": "Để kiểm tra xem checkbox có được click hay không, phải sử dụng phương thức gì của lớp Solo?",
        "Marks": 1,
        "AnswerId": 104900,
        "Answers": [{
          "Id": 104897,
          "Text": "isCheckBoxesCheck"
        }, {
          "Id": 104898,
          "Text": "isCheckBoxCheck"
        }, {
          "Id": 104899,
          "Text": "isCheckBoxesChecked"
        }, {
          "Id": 104900,
          "Text": "isCheckBoxChecked"
        }]
      }, {
        "Id": 25309,
        "Text": "Lợi ích của Robotium là gì?",
        "Marks": 1,
        "AnswerId": 104902,
        "Answers": [{
          "Id": 104901,
          "Text": "Kiểm thử các ứng dụng game trên Android"
        }, {
          "Id": 104902,
          "Text": "Kiểm thử các ứng dụng Android với tốc độ kiểm thử cao"
        }, {
          "Id": 104903,
          "Text": "Kiểm thử các ứng dụng Window Phone"
        }, {
          "Id": 104904,
          "Text": "Kiểm thử các ứng dụng iOS"
        }]
      }, {
        "Id": 25310,
        "Text": "Sử dụng lớp nào của Robotium để kiểm thử giao diện?",
        "Marks": 1,
        "AnswerId": 104907,
        "Answers": [{
          "Id": 104905,
          "Text": "Solo2"
        }, {
          "Id": 104906,
          "Text": "RobotiumTestCase"
        }, {
          "Id": 104907,
          "Text": "Solo"
        }, {
          "Id": 104908,
          "Text": "RobotiumTestCase2"
        }]
      }, {
        "Id": 25311,
        "Text": "Để có thể ghi thông tin screenshot vào sdcard từ robotium, phải thêm quyền gì vào AndroidManifest?",
        "Marks": 1,
        "AnswerId": 104912,
        "Answers": [{
          "Id": 104909,
          "Text": "android.permission.WRITE_GSERVICES"
        }, {
          "Id": 104910,
          "Text": "android.permission.WRITE_SECURE_SETTINGS"
        }, {
          "Id": 104911,
          "Text": "android.permission.WRITE_SMS"
        }, {
          "Id": 104912,
          "Text": "android.permission.WRITE_EXTERNAL_STORAGE"
        }]
      }, {
        "Id": 25312,
        "Text": "Giá trị nào không phải giá trị của robolectric.logging?",
        "Marks": 1,
        "AnswerId": 104914,
        "Answers": [{
          "Id": 104913,
          "Text": "tên file"
        }, {
          "Id": 104914,
          "Text": "stdin"
        }, {
          "Id": 104915,
          "Text": "stdout"
        }, {
          "Id": 104916,
          "Text": "stderr"
        }]
      }, {
        "Id": 25313,
        "Text": "Trong các phương thức kiểm thử của Robolectric, phải sử dụng test annotation nào?",
        "Marks": 1,
        "AnswerId": 104918,
        "Answers": [{
          "Id": 104917,
          "Text": "@RunWithRobolectric"
        }, {
          "Id": 104918,
          "Text": "@RunWith"
        }, {
          "Id": 104919,
          "Text": "@With"
        }, {
          "Id": 104920,
          "Text": "@Run"
        }]
      }, {
        "Id": 25314,
        "Text": "Phải sử dụng file jar nào khi kiểm thử bằng Robolectric?",
        "Marks": 1,
        "AnswerId": 104923,
        "Answers": [{
          "Id": 104921,
          "Text": "androidjunit.jar"
        }, {
          "Id": 104922,
          "Text": "junit2.jar"
        }, {
          "Id": 104923,
          "Text": "android.jar"
        }, {
          "Id": 104924,
          "Text": "junit1.jar"
        }]
      }, {
        "Id": 25315,
        "Text": "Để thiết lập giá trị mặc định cho các item trong đối tượng Config, phải thiết lập trong file nào?",
        "Marks": 1,
        "AnswerId": 104928,
        "Answers": [{
          "Id": 104925,
          "Text": "org.Config.properties"
        }, {
          "Id": 104926,
          "Text": "robolectric.Config.properties"
        }, {
          "Id": 104927,
          "Text": "org.robolectric.Config.property"
        }, {
          "Id": 104928,
          "Text": "org.robolectric.Config.properties"
        }]
      }, {
        "Id": 25316,
        "Text": "Câu nào là đúng khi nói về Robolectric?",
        "Marks": 1,
        "AnswerId": 104930,
        "Answers": [{
          "Id": 104929,
          "Text": "Robolectric chỉ cho phép kiểm thử trên emulator"
        }, {
          "Id": 104930,
          "Text": "Robolectric cho phép kiểm thử không cần thiết bị thật và emulator"
        }, {
          "Id": 104931,
          "Text": "Robolectric chỉ cho phép kiểm thử trên thiết bị thật"
        }, {
          "Id": 104932,
          "Text": "Robolectric cho phép kiểm thử thiết bị iOS"
        }]
      }, {
        "Id": 25317,
        "Text": "Phải sử dụng test annotation nào trước phương thức kiểm thử để có thể sử dụng file AndroidManifest tùy biến tên là ModifiedAndroidManifest?",
        "Marks": 1,
        "AnswerId": 104936,
        "Answers": [{
          "Id": 104933,
          "Text": "@Configs(manifest = \"ModifiedAndroidManifest.xml\")"
        }, {
          "Id": 104934,
          "Text": "@Configuration(manifest = \"ModifiedAndroidManifest.xml\")"
        }, {
          "Id": 104935,
          "Text": "@Config(manifest = \"ModifiedAndroidManifest\")"
        }, {
          "Id": 104936,
          "Text": "@Config(manifest = \"ModifiedAndroidManifest.xml\")"
        }]
      }, {
        "Id": 25318,
        "Text": "File project.properties phải nằm ở đâu trong project?",
        "Marks": 1,
        "AnswerId": 104940,
        "Answers": [{
          "Id": 104937,
          "Text": "thư mục image"
        }, {
          "Id": 104938,
          "Text": "thư mục lib"
        }, {
          "Id": 104939,
          "Text": "thư mục test"
        }, {
          "Id": 104940,
          "Text": "thư mục gốc"
        }]
      }, {
        "Id": 25319,
        "Text": "Sử dụng đối tượng nào trong Robolectric để có thể truy xuất thông tin của ImageView?",
        "Marks": 1,
        "AnswerId": 104944,
        "Answers": [{
          "Id": 104941,
          "Text": "ShadowImage"
        }, {
          "Id": 104942,
          "Text": "ImageView"
        }, {
          "Id": 104943,
          "Text": "Image"
        }, {
          "Id": 104944,
          "Text": "ShadowImageView"
        }]
      }, {
        "Id": 25320,
        "Text": "Robolectric sử dụng JUnit phiên bản nào?",
        "Marks": 1,
        "AnswerId": 104945,
        "Answers": [{
          "Id": 104945,
          "Text": "JUnit4"
        }, {
          "Id": 104946,
          "Text": "JUnit3"
        }, {
          "Id": 104947,
          "Text": "JUnit2"
        }, {
          "Id": 104948,
          "Text": "JUnit1"
        }]
      }, {
        "Id": 25321,
        "Text": "Đối tượng nào trong Robolectric hoạt động tương tự như các đối tượng của Android SDK?",
        "Marks": 1,
        "AnswerId": 104950,
        "Answers": [{
          "Id": 104949,
          "Text": "junit object"
        }, {
          "Id": 104950,
          "Text": "Shadow object"
        }, {
          "Id": 104951,
          "Text": "hidden object"
        }, {
          "Id": 104952,
          "Text": "android object"
        }]
      }, {
        "Id": 25322,
        "Text": "Lệnh nào dùng để tạo Activity MyActivity, sau đó khởi tạo Activty, cuối cùng sẽ trả lại một đối tượng Activity?",
        "Marks": 1,
        "AnswerId": 104954,
        "Answers": [{
          "Id": 104953,
          "Text": "Robolectric.buildActivity(MyActivity.class).onCreate().start().get()"
        }, {
          "Id": 104954,
          "Text": "Robolectric.buildActivity(MyActivity.class).create().start().get()"
        }, {
          "Id": 104955,
          "Text": "Robolectric.createActivity(MyActivity.class).create().start().get()"
        }, {
          "Id": 104956,
          "Text": "Robolectric.buildActivity(MyActivity).create().start().get()"
        }]
      }, {
        "Id": 25323,
        "Text": "Trong roboguide, để khai báo một resource có id là app_desc, phải sử dụng lệnh nào?",
        "Marks": 1,
        "AnswerId": 104957,
        "Answers": [{
          "Id": 104957,
          "Text": "@InjectResources(R.id.app_desc) String app_mota"
        }, {
          "Id": 104958,
          "Text": "@InjectView(R.id.app_desc) String app_mota"
        }, {
          "Id": 104959,
          "Text": "@InjectResource(R.id.editText1) String app_mota"
        }, {
          "Id": 104960,
          "Text": "@InjectView(app_desc) String app_mota"
        }]
      }, {
        "Id": 25324,
        "Text": "RoboGuide có thể sử dụng với framework kiểm thử nào?",
        "Marks": 1,
        "AnswerId": 104962,
        "Answers": [{
          "Id": 104961,
          "Text": "Mockito"
        }, {
          "Id": 104962,
          "Text": "Robolectric"
        }, {
          "Id": 104963,
          "Text": "Robotium"
        }, {
          "Id": 104964,
          "Text": "Android testing framework"
        }]
      }, {
        "Id": 25325,
        "Text": "Trong Robolectric từ version 2.2, lớp nào hỗ trợ quản lý vòng đời Activity giống với Android SDK?",
        "Marks": 1,
        "AnswerId": 104965,
        "Answers": [{
          "Id": 104965,
          "Text": "Activities"
        }, {
          "Id": 104966,
          "Text": "ActivityControlling"
        }, {
          "Id": 104967,
          "Text": "ActivityController"
        }, {
          "Id": 104968,
          "Text": "Actiivty"
        }]
      }, {
        "Id": 25326,
        "Text": "Câu nào là đúng đối với việc quản lý tài nguyên trong Robolectric?",
        "Marks": 1,
        "AnswerId": 104971,
        "Answers": [{
          "Id": 104969,
          "Text": "Chỉ cho phép thay đổi cách tài nguyên được nạp dựa trên yếu tố thiết bị"
        }, {
          "Id": 104970,
          "Text": "Chỉ cho phép thay đổi cách tài nguyên được nạp dựa trên các yếu tố thiết bị, cỡ màn hình"
        }, {
          "Id": 104971,
          "Text": "Cho phép thay đổi cách tài nguyên được nạp dựa trên các yếu tố thiết bị, cỡ màn hình,ngôn ngữ"
        }, {
          "Id": 104972,
          "Text": "Không cho phép thay đổi tài nguyên"
        }]
      }, {
        "Id": 25327,
        "Text": "Để xác định tài nguyên cho phương thức kiểm thử cụ thể, phải sử dụng từ khóa nào trước phương thức đó?",
        "Marks": 1,
        "AnswerId": 104974,
        "Answers": [{
          "Id": 104973,
          "Text": "@Configurtor"
        }, {
          "Id": 104974,
          "Text": "@Config"
        }, {
          "Id": 104975,
          "Text": "@Configs"
        }, {
          "Id": 104976,
          "Text": "@Configuration"
        }]
      }, {
        "Id": 25328,
        "Text": "Để xác định tài nguyên cho cả phương thức cụ thể, phải dùng từ khóa @Config ở đâu?",
        "Marks": 1,
        "AnswerId": 104978,
        "Answers": [{
          "Id": 104977,
          "Text": "Trong file resource"
        }, {
          "Id": 104978,
          "Text": "Trong từng test case"
        }, {
          "Id": 104979,
          "Text": "Trong file values.xml"
        }, {
          "Id": 104980,
          "Text": "Trong file test"
        }]
      }, {
        "Id": 25329,
        "Text": "Trong Robolectric từ version 2.2, phương thức nào được sử dụng để quản lý Activity?",
        "Marks": 1,
        "AnswerId": 104982,
        "Answers": [{
          "Id": 104981,
          "Text": "Robolectric.onCreateAcitivity"
        }, {
          "Id": 104982,
          "Text": "Robolectric.buildActivity"
        }, {
          "Id": 104983,
          "Text": "Robolectric.startActivity"
        }, {
          "Id": 104984,
          "Text": "Robolectric.createActivity"
        }]
      }, {
        "Id": 25330,
        "Text": "Trong roboguide, để khai báo một EditText có id là editText1, phải sử dụng lệnh nào?",
        "Marks": 1,
        "AnswerId": 104988,
        "Answers": [{
          "Id": 104985,
          "Text": "@InjectView(editText1) EditText name"
        }, {
          "Id": 104986,
          "Text": "@InjectResource(R.id.editText1) EditText name"
        }, {
          "Id": 104987,
          "Text": "@Inject(R.id.editText1) EditText name"
        }, {
          "Id": 104988,
          "Text": "@InjectView(R.id.editText1) EditText name"
        }]
      }, {
        "Id": 25331,
        "Text": "Roboguice không thể chạy trên IDE nào?",
        "Marks": 1,
        "AnswerId": 104989,
        "Answers": [{
          "Id": 104989,
          "Text": "Net Bean"
        }, {
          "Id": 104990,
          "Text": "Android Studio"
        }, {
          "Id": 104991,
          "Text": "IntelliJ"
        }, {
          "Id": 104992,
          "Text": "Eclipse"
        }]
      }, {
        "Id": 25332,
        "Text": "Thực thể key.store được lưu trữ ở đâu?",
        "Marks": 1,
        "AnswerId": 104996,
        "Answers": [{
          "Id": 104993,
          "Text": "ant.prop"
        }, {
          "Id": 104994,
          "Text": "apk.properties"
        }, {
          "Id": 104995,
          "Text": "apk.prop"
        }, {
          "Id": 104996,
          "Text": "ant.properties"
        }]
      }, {
        "Id": 25333,
        "Text": "Khi kiểm tra và cập nhật file manifest trước khi phát hành, ta cần kiểm tra các thành phần nào?",
        "Marks": 1,
        "AnswerId": 105000,
        "Answers": [{
          "Id": 104997,
          "Text": ", android:CodeLabel, android:versionName"
        }, {
          "Id": 104998,
          "Text": ", android:versionCode, android:versionLabel"
        }, {
          "Id": 104999,
          "Text": ", android:labelCode, android:versionName"
        }, {
          "Id": 105000,
          "Text": ", android:versionCode, android:versionName"
        }]
      }, {
        "Id": 25334,
        "Text": "Để xóa các tài nguyên không cần thiết khỏi ứng dụng, ta cần vào các thư mục nào?",
        "Marks": 1,
        "AnswerId": 105001,
        "Answers": [{
          "Id": 105001,
          "Text": "jni/, lib/, và src/"
        }, {
          "Id": 105002,
          "Text": "jni/, lib/, src/ và code/"
        }, {
          "Id": 105003,
          "Text": "jni/, lib/, src/, code/ và img/"
        }, {
          "Id": 105004,
          "Text": "code/ và img/"
        }]
      }, {
        "Id": 25335,
        "Text": "Google Play là gì?",
        "Marks": 1,
        "AnswerId": 105005,
        "Answers": [{
          "Id": 105005,
          "Text": "Chợ ứng dụng android"
        }, {
          "Id": 105006,
          "Text": "Thư viện android"
        }, {
          "Id": 105007,
          "Text": "Chợ phần cứng mobile"
        }, {
          "Id": 105008,
          "Text": "Thư viện .net"
        }]
      }, {
        "Id": 25336,
        "Text": "Để ứng dụng có thể phát hành, bạn cần làm gì?",
        "Marks": 1,
        "AnswerId": 105010,
        "Answers": [{
          "Id": 105009,
          "Text": "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói jdk"
        }, {
          "Id": 105010,
          "Text": "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk"
        }, {
          "Id": 105011,
          "Text": "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk và gói jdk"
        }, {
          "Id": 105012,
          "Text": "Có một khóa riêng phù hợp; Biên dịch ứng dụng trong chế độ phát hành; Đăng ký ứng dụng với khóa riêng;Tạo gói apk, gói jar và gói jdk"
        }]
      }, {
        "Id": 25337,
        "Text": "Để xây dựng ứng dụng phát hành bằng dòng lệnh, ta dùng lệnh nào?",
        "Marks": 1,
        "AnswerId": 105013,
        "Answers": [{
          "Id": 105013,
          "Text": "ant release"
        }, {
          "Id": 105014,
          "Text": "ant debug"
        }, {
          "Id": 105015,
          "Text": "apk debug"
        }, {
          "Id": 105016,
          "Text": "apk release"
        }]
      }, {
        "Id": 25338,
        "Text": "Lệnh adb dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 105018,
        "Answers": [{
          "Id": 105017,
          "Text": "Cài đặt file jdk"
        }, {
          "Id": 105018,
          "Text": "Cài đặt file apk"
        }, {
          "Id": 105019,
          "Text": "Ẩn file apk"
        }, {
          "Id": 105020,
          "Text": "Ẩn file jdk"
        }]
      }, {
        "Id": 25339,
        "Text": "Để chạy ứng dụng trên thiết bị thật, chúng ta cần làm gì?",
        "Marks": 1,
        "AnswerId": 105021,
        "Answers": [{
          "Id": 105021,
          "Text": "Enable USB debugging"
        }, {
          "Id": 105022,
          "Text": "Disable USB debugging"
        }, {
          "Id": 105023,
          "Text": "Enable Apache debugging"
        }, {
          "Id": 105024,
          "Text": "Enable USB debuger"
        }]
      }, {
        "Id": 25340,
        "Text": "Lệnh jarsigner dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 105028,
        "Answers": [{
          "Id": 105025,
          "Text": "Xóa ứng dụng"
        }, {
          "Id": 105026,
          "Text": "Đăng nhập ứng dụng"
        }, {
          "Id": 105027,
          "Text": "Đăng xuất ứng dụng"
        }, {
          "Id": 105028,
          "Text": "Đăng ký ứng dụng với khóa riêng"
        }]
      }, {
        "Id": 25341,
        "Text": "Tham số validity của keytool có ý nghĩa gì?",
        "Marks": 1,
        "AnswerId": 105029,
        "Answers": [{
          "Id": 105029,
          "Text": "Thời gian hiệu lực"
        }, {
          "Id": 105030,
          "Text": "Thời gian upload ứng dụng"
        }, {
          "Id": 105031,
          "Text": "Thuật toán mã hóa"
        }, {
          "Id": 105032,
          "Text": "Bí danh ứng dụng"
        }]
      }]
    },
    {
      "Id": "ADUI",
      "quiz": [{
        "Id": 25183,
        "Text": "System Bar bao gồm các thành phần nào?",
        "Marks": 1,
        "AnswerId": 104411,
        "Answers": [{
          "Id": 104408,
          "Text": "Navigation Bar"
        }, {
          "Id": 104409,
          "Text": "Status Bar"
        }, {
          "Id": 104410,
          "Text": "Notification Bar"
        }, {
          "Id": 104411,
          "Text": "Status Bar và Navigation Bar"
        }]
      }, {
        "Id": 25184,
        "Text": "Câu nào sau đây đúng khi nói về Frame layout?",
        "Marks": 1,
        "AnswerId": 104412,
        "Answers": [{
          "Id": 104412,
          "Text": "Frame layout là loại layout luôn lấy tọa độ gốc là top- left và nó xếp chồng view sau lên view trước"
        }, {
          "Id": 104413,
          "Text": "Frame layout sắp xếp các view ở chính xác tọa độ mong muốn thông qua các thuộc tính layout_x và layout_y"
        }, {
          "Id": 104414,
          "Text": "Frame layout sắp xếp các view theo hàng ngang hoặc hàng dọc, trong một cột hoặc một dòng"
        }, {
          "Id": 104415,
          "Text": "Frame layout sắp xếp các view thành các cột và dòng. Mỗi view trong 1 tableRow sẽ là 1 cột"
        }]
      }, {
        "Id": 25185,
        "Text": "Trong android, interface được tạo từ các điều khiển gì?",
        "Marks": 1,
        "AnswerId": 104416,
        "Answers": [{
          "Id": 104416,
          "Text": "View và View group"
        }, {
          "Id": 104417,
          "Text": "View"
        }, {
          "Id": 104418,
          "Text": "Button"
        }, {
          "Id": 104419,
          "Text": "View group"
        }]
      }, {
        "Id": 25186,
        "Text": "Điều khiển nào sau đây không phải là một layout?",
        "Marks": 1,
        "AnswerId": 104420,
        "Answers": [{
          "Id": 104420,
          "Text": "LeftAlignLayout"
        }, {
          "Id": 104421,
          "Text": "RelativeLayout"
        }, {
          "Id": 104422,
          "Text": "AbsoluteLayout"
        }, {
          "Id": 104423,
          "Text": "RelativeLayout"
        }]
      }, {
        "Id": 25187,
        "Text": "Các điều khiển nào sau đây hiển thị trên Navigation Bar?",
        "Marks": 1,
        "AnswerId": 104425,
        "Answers": [{
          "Id": 104424,
          "Text": "Recent"
        }, {
          "Id": 104425,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 104426,
          "Text": "Home"
        }, {
          "Id": 104427,
          "Text": "Back"
        }]
      }, {
        "Id": 25188,
        "Text": "Loại layout nào sau đây luôn dùng để gắn các control ở góc bên trái trên cùng màn hình và không cho phép thay đổi vị trí của các control?",
        "Marks": 1,
        "AnswerId": 104428,
        "Answers": [{
          "Id": 104428,
          "Text": "Frame layout"
        }, {
          "Id": 104429,
          "Text": "Table layout"
        }, {
          "Id": 104430,
          "Text": "Relative layout"
        }, {
          "Id": 104431,
          "Text": "Linear layout"
        }]
      }, {
        "Id": 25189,
        "Text": "Khi viết code, ta có thể thiết lập hướng các control trên Linear layout bằng hàm nào?",
        "Marks": 1,
        "AnswerId": 104435,
        "Answers": [{
          "Id": 104432,
          "Text": "setVertical()"
        }, {
          "Id": 104433,
          "Text": "setHorizontal()"
        }, {
          "Id": 104434,
          "Text": "setDirection()"
        }, {
          "Id": 104435,
          "Text": "setOrientation()"
        }]
      }, {
        "Id": 25190,
        "Text": "Màn hình Home Screen là màn hình như thế nào?",
        "Marks": 1,
        "AnswerId": 104437,
        "Answers": [{
          "Id": 104436,
          "Text": "Màn hình cung cấp cho người dùng truy cập đến các ứng dụng Mail được cài trên thiết bị"
        }, {
          "Id": 104437,
          "Text": "Chứa các folder, widgets hoặc các app shortcuts tùy theo ý người dùng"
        }, {
          "Id": 104438,
          "Text": "Màn hình cung cấp cho người dùng truy cập đến các ứng dụng đang chạy gần đây một cách nhanh nhất"
        }, {
          "Id": 104439,
          "Text": "Hiển thị toàn bộ ứng dụng được cài trên máy từ Amazon Store, và có thể đưa một ứng dụng bất kỳ ra màn hình Home"
        }]
      }, {
        "Id": 25191,
        "Text": "Câu nào đúng khi nói về AutoCompleteTextView?",
        "Marks": 1,
        "AnswerId": 104443,
        "Answers": [{
          "Id": 104440,
          "Text": "Vừa là layout vừa là widget"
        }, {
          "Id": 104441,
          "Text": "Thực chất là một Menu"
        }, {
          "Id": 104442,
          "Text": "Là một layout"
        }, {
          "Id": 104443,
          "Text": "Là một widget"
        }]
      }, {
        "Id": 25192,
        "Text": "Đơn vị đo lường không dùng trong Android là?",
        "Marks": 1,
        "AnswerId": 104446,
        "Answers": [{
          "Id": 104444,
          "Text": "Db/dip (Density- independent pixel)"
        }, {
          "Id": 104445,
          "Text": "Px (Pixel)"
        }, {
          "Id": 104446,
          "Text": "Ptx"
        }, {
          "Id": 104447,
          "Text": "Pt (Point)"
        }]
      }, {
        "Id": 25193,
        "Text": "Để thêm font vào ứng dụng trong android, khi bạn cần copy thêm fonts thì phải thêm font vào thư mục nào?",
        "Marks": 1,
        "AnswerId": 104451,
        "Answers": [{
          "Id": 104448,
          "Text": "/layout/fonts"
        }, {
          "Id": 104449,
          "Text": "/menu/fonts"
        }, {
          "Id": 104450,
          "Text": "/value/fonts"
        }, {
          "Id": 104451,
          "Text": "/assets/fonts"
        }]
      }, {
        "Id": 25194,
        "Text": "Khi thiết kế bố trí các control trên màn hình, khoảng cách các control nên là bao nhiêu?",
        "Marks": 1,
        "AnswerId": 104455,
        "Answers": [{
          "Id": 104452,
          "Text": "10dp"
        }, {
          "Id": 104453,
          "Text": "7dp"
        }, {
          "Id": 104454,
          "Text": "9dp"
        }, {
          "Id": 104455,
          "Text": "8dp"
        }]
      }, {
        "Id": 25195,
        "Text": "Trong Relative layout, để chỉ ra rằng widget phải được đặt ở bên dưới của widget tham chiếu. ta sử dụng thuộc tính nào?",
        "Marks": 1,
        "AnswerId": 104458,
        "Answers": [{
          "Id": 104456,
          "Text": "android:layout_above"
        }, {
          "Id": 104457,
          "Text": "android:layout_toRightOf"
        }, {
          "Id": 104458,
          "Text": "android:layout_below"
        }, {
          "Id": 104459,
          "Text": "android:layout_toLeftOf"
        }]
      }, {
        "Id": 25196,
        "Text": "Trong table layout ta dùng thuộc tính nào để giãn đều các control, các cell ?",
        "Marks": 1,
        "AnswerId": 104461,
        "Answers": [{
          "Id": 104460,
          "Text": "android:stretchColumns=\"1\""
        }, {
          "Id": 104461,
          "Text": "android:stretchColumns=\"*\""
        }, {
          "Id": 104462,
          "Text": "android:stretchColumns=\"+\""
        }, {
          "Id": 104463,
          "Text": "android:stretchColumns=\"0\""
        }]
      }, {
        "Id": 25197,
        "Text": "Để sử dụng font copy trong file xml, ta sử dụng thuộc tính sau?",
        "Marks": 1,
        "AnswerId": 104466,
        "Answers": [{
          "Id": 104464,
          "Text": "android:face=‘”serif”"
        }, {
          "Id": 104465,
          "Text": "android:type=‘”serif”"
        }, {
          "Id": 104466,
          "Text": "android:typeface=‘”serif”"
        }, {
          "Id": 104467,
          "Text": "android:font=‘”serif”"
        }]
      }, {
        "Id": 25198,
        "Text": "Trong Relative layout, để chỉ ra rằng widget phải được đặt ở bên trái của widget tham chiếu. ta sử dụng thuộc tính nào?",
        "Marks": 1,
        "AnswerId": 104471,
        "Answers": [{
          "Id": 104468,
          "Text": "android:layout_toRightOf"
        }, {
          "Id": 104469,
          "Text": "android:layout_alignParentLeft"
        }, {
          "Id": 104470,
          "Text": "android:layout_alignParentRight"
        }, {
          "Id": 104471,
          "Text": "android:layout_toLeftOf"
        }]
      }, {
        "Id": 25199,
        "Text": "Layout nào cho phép sắp xếp các control dưới dạng lưới (cột và hàng)?",
        "Marks": 1,
        "AnswerId": 104472,
        "Answers": [{
          "Id": 104472,
          "Text": "Table layout"
        }, {
          "Id": 104473,
          "Text": "Relative layout"
        }, {
          "Id": 104474,
          "Text": "Frame layout"
        }, {
          "Id": 104475,
          "Text": "Absolute layout"
        }]
      }, {
        "Id": 25200,
        "Text": "Style có thể được kế thừa bằng cách thêm thuộc tính parent = “@android: style/…” đúng hay sai?",
        "Marks": 1,
        "AnswerId": 104476,
        "Answers": [{
          "Id": 104476,
          "Text": "Đúng"
        }, {
          "Id": 104477,
          "Text": "Sai"
        }]
      }, {
        "Id": 25201,
        "Text": "Điều khiển nào không phải là một layout?",
        "Marks": 1,
        "AnswerId": 104481,
        "Answers": [{
          "Id": 104478,
          "Text": "Absolute layout"
        }, {
          "Id": 104479,
          "Text": "Table layout"
        }, {
          "Id": 104480,
          "Text": "Table layout và Absolute layout"
        }, {
          "Id": 104481,
          "Text": "ListView"
        }]
      }, {
        "Id": 25202,
        "Text": "Trong Relative layout, để chỉ ra rằng widget phải được đặt ở đầu của layout mà nó nằm ta sử dụng thuộc tính?",
        "Marks": 1,
        "AnswerId": 104482,
        "Answers": [{
          "Id": 104482,
          "Text": "android:layout_alignParentTop"
        }, {
          "Id": 104483,
          "Text": "android:layout_above"
        }, {
          "Id": 104484,
          "Text": "android:layout_alignParentBottom"
        }, {
          "Id": 104485,
          "Text": "android:layout_below"
        }]
      }, {
        "Id": 25203,
        "Text": "Với CheckBox để thiết lập trạng thái checked hay unchecked ta dùng lệnh sau?",
        "Marks": 1,
        "AnswerId": 104486,
        "Answers": [{
          "Id": 104486,
          "Text": "setChecked()"
        }, {
          "Id": 104487,
          "Text": "clearChecked()"
        }, {
          "Id": 104488,
          "Text": "getCheckedRadioButtonId()"
        }, {
          "Id": 104489,
          "Text": "isChecked()"
        }]
      }, {
        "Id": 25204,
        "Text": "Thuộc tính sau có thể áp dụng cho những widget nào? android:src=\"@drawable/icon\"",
        "Marks": 1,
        "AnswerId": 104493,
        "Answers": [{
          "Id": 104490,
          "Text": "ImageButtion"
        }, {
          "Id": 104491,
          "Text": "ImageView"
        }, {
          "Id": 104492,
          "Text": "EditText"
        }, {
          "Id": 104493,
          "Text": "Cả ImageButtion và ImageView"
        }]
      }, {
        "Id": 25205,
        "Text": "Với RadioButton để thiết lập trạng thái checked hay unchecked ta dùng lệnh sau?",
        "Marks": 1,
        "AnswerId": 104494,
        "Answers": [{
          "Id": 104494,
          "Text": "isChecked()"
        }, {
          "Id": 104495,
          "Text": "clearChecked()"
        }, {
          "Id": 104496,
          "Text": "getCheckedRadioButtonId()"
        }, {
          "Id": 104497,
          "Text": "setChecked()"
        }]
      }, {
        "Id": 25206,
        "Text": "Trong những câu sau, câu nào đúng khi nói về RadioButton?",
        "Marks": 1,
        "AnswerId": 104499,
        "Answers": [{
          "Id": 104498,
          "Text": "Những RadioButton cùng nằm trong một RadioGroup thì tại 1 thời điểm có nhiều RadioButton được checked."
        }, {
          "Id": 104499,
          "Text": "Những RadioButton cùng nằm trong một RadioGroup thì tại 1 thời điểm chỉ có 1 RadioButton được checked mà thôi"
        }, {
          "Id": 104500,
          "Text": "Những RadioButton không cùng nằm trong một RadioGroup thì tại 1 thời điểm chỉ có 1 RadioButton được checked mà thôi"
        }, {
          "Id": 104501,
          "Text": "Không phương án nào đúng."
        }]
      }, {
        "Id": 25207,
        "Text": "Để lấy dữ liệu bên trong EditText ta thực hiện lệnh sau?",
        "Marks": 1,
        "AnswerId": 104503,
        "Answers": [{
          "Id": 104502,
          "Text": "doText()"
        }, {
          "Id": 104503,
          "Text": "getText()"
        }, {
          "Id": 104504,
          "Text": "setText()"
        }, {
          "Id": 104505,
          "Text": "Text()"
        }]
      }, {
        "Id": 25208,
        "Text": "Với RadioButton để xóa bỏ checked trong group, ta dùng lệnh sau?",
        "Marks": 1,
        "AnswerId": 104509,
        "Answers": [{
          "Id": 104506,
          "Text": "setChecked()"
        }, {
          "Id": 104507,
          "Text": "isChecked()"
        }, {
          "Id": 104508,
          "Text": "getCheckedRadioButtonId()"
        }, {
          "Id": 104509,
          "Text": "clearChecked()"
        }]
      }, {
        "Id": 25209,
        "Text": "Trong ImageView và ImageButton khi khai báo thuộc tínhandroid:src=\"@drawable/icon\", thì icon sẽ được lưu ở đâu?",
        "Marks": 1,
        "AnswerId": 104511,
        "Answers": [{
          "Id": 104510,
          "Text": "/res/menu"
        }, {
          "Id": 104511,
          "Text": "/res/drawable/"
        }, {
          "Id": 104512,
          "Text": "/res/values"
        }, {
          "Id": 104513,
          "Text": "/res/layout"
        }]
      }, {
        "Id": 25210,
        "Text": "Trong EditText để nhập một hoặc nhiều dòng dữ liệu ta sử dụng thuộc tính?",
        "Marks": 1,
        "AnswerId": 104516,
        "Answers": [{
          "Id": 104514,
          "Text": "android:capitalize"
        }, {
          "Id": 104515,
          "Text": "android:textSize"
        }, {
          "Id": 104516,
          "Text": "android:singleLine"
        }, {
          "Id": 104517,
          "Text": "android:digits"
        }]
      }, {
        "Id": 25211,
        "Text": "Trong EditText để hiển thị thông tin gợi ý trong vùng nhập dữ liệu khi bạn chưa nhập bất kỳ dữ liệu nào vào và phần gợi ý sẽ tự động mất đi khi có dữ liệu nhập, người ta sử dụng thuộc tính nào?",
        "Marks": 1,
        "AnswerId": 104520,
        "Answers": [{
          "Id": 104518,
          "Text": "android: hint"
        }, {
          "Id": 104519,
          "Text": "android:textSize"
        }, {
          "Id": 104520,
          "Text": "android:autoText"
        }, {
          "Id": 104521,
          "Text": "android:capitalize"
        }]
      }, {
        "Id": 25212,
        "Text": "Để Button thực hiện một hành động click ta khai báo thuộc tính sau?",
        "Marks": 1,
        "AnswerId": 104525,
        "Answers": [{
          "Id": 104522,
          "Text": "android: input=\"\""
        }, {
          "Id": 104523,
          "Text": "android: Click=\"\""
        }, {
          "Id": 104524,
          "Text": "android:inClick=\"\""
        }, {
          "Id": 104525,
          "Text": "android:onClick=\"\""
        }]
      }, {
        "Id": 25213,
        "Text": "Trong ListView, các dòng dữ liệu có thể chứa những loại nào sau đây?",
        "Marks": 1,
        "AnswerId": 104526,
        "Answers": [{
          "Id": 104526,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 104527,
          "Text": "multi-line items"
        }, {
          "Id": 104528,
          "Text": "custom items"
        }, {
          "Id": 104529,
          "Text": "simple single-line items"
        }]
      }, {
        "Id": 25214,
        "Text": "Để hiển thị thanh cuốn theo chiều dọc người ta dùng điều khiển nào?",
        "Marks": 1,
        "AnswerId": 104533,
        "Answers": [{
          "Id": 104530,
          "Text": "Button"
        }, {
          "Id": 104531,
          "Text": "Textview"
        }, {
          "Id": 104532,
          "Text": "EditText"
        }, {
          "Id": 104533,
          "Text": "Gridview"
        }]
      }, {
        "Id": 25215,
        "Text": "Trong các dòng dữ liệu ở ListView, ta có thể đặt điều khiển nào?",
        "Marks": 1,
        "AnswerId": 104536,
        "Answers": [{
          "Id": 104534,
          "Text": "Button action"
        }, {
          "Id": 104535,
          "Text": "Icons"
        }, {
          "Id": 104536,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 104537,
          "Text": "Checkbox"
        }]
      }, {
        "Id": 25216,
        "Text": "Để người sử dụng có thể nhập từ mới (không có trong danh sách) hoặc có thể lựa chọn từ ở trong danh sách hiển thị, ta dùng widget nào?",
        "Marks": 1,
        "AnswerId": 104539,
        "Answers": [{
          "Id": 104538,
          "Text": "Spinner"
        }, {
          "Id": 104539,
          "Text": "AutoCompleteTextView"
        }, {
          "Id": 104540,
          "Text": "GridView"
        }, {
          "Id": 104541,
          "Text": "Textview"
        }]
      }, {
        "Id": 25217,
        "Text": "Trong Gridview để hiển thị 4 cột, phải dùng khai báo nào sau đây?",
        "Marks": 1,
        "AnswerId": 104542,
        "Answers": [{
          "Id": 104542,
          "Text": "android:numColumns = \"4\""
        }, {
          "Id": 104543,
          "Text": "android:Columns = \"4\""
        }, {
          "Id": 104544,
          "Text": "android:Col = \"4\""
        }, {
          "Id": 104545,
          "Text": "android:numCol= \"4\""
        }]
      }, {
        "Id": 25218,
        "Text": "Trong những widget sau đây, đâu không phải là widget lựa chọn?",
        "Marks": 1,
        "AnswerId": 104546,
        "Answers": [{
          "Id": 104546,
          "Text": "Textview"
        }, {
          "Id": 104547,
          "Text": "ListView"
        }, {
          "Id": 104548,
          "Text": "AutocomplexTextview"
        }, {
          "Id": 104549,
          "Text": "Spinner"
        }]
      }, {
        "Id": 25219,
        "Text": "Để chỉ ra số cột sẽ hiển thị trong GridView, phải sử dụng thuộc tính nào?",
        "Marks": 1,
        "AnswerId": 104552,
        "Answers": [{
          "Id": 104550,
          "Text": "android:verticalSpacing"
        }, {
          "Id": 104551,
          "Text": "android:columnWidth"
        }, {
          "Id": 104552,
          "Text": "android:numColumns"
        }, {
          "Id": 104553,
          "Text": "android:horizontalSpacing"
        }]
      }, {
        "Id": 25220,
        "Text": "Trong Android, điều khiển nào là một widget chọn dạng drop-down?",
        "Marks": 1,
        "AnswerId": 104554,
        "Answers": [{
          "Id": 104554,
          "Text": "Spinner"
        }, {
          "Id": 104555,
          "Text": "Listview và Gridview"
        }, {
          "Id": 104556,
          "Text": "Gridview"
        }, {
          "Id": 104557,
          "Text": "Listwiew"
        }]
      }, {
        "Id": 25221,
        "Text": "Trong AutoCompleteTextView thuộc tính nào chỉ ra số ký tự tối thiểu mà người dùng có thể nhập để hiển thị ra danh sách từ gợi ý tương tự?",
        "Marks": 1,
        "AnswerId": 104561,
        "Answers": [{
          "Id": 104558,
          "Text": "android:completionHintView"
        }, {
          "Id": 104559,
          "Text": "android:dropDownSelector"
        }, {
          "Id": 104560,
          "Text": "android:completionHint"
        }, {
          "Id": 104561,
          "Text": "android:completionThreshold"
        }]
      }, {
        "Id": 25222,
        "Text": "Phương thức sử dụng để gọi ngày tháng năm trong DatePickerDialog là?",
        "Marks": 1,
        "AnswerId": 104565,
        "Answers": [{
          "Id": 104562,
          "Text": "OnTimeChangedListene"
        }, {
          "Id": 104563,
          "Text": "OnDateChangedListener và OnDateSetListener"
        }, {
          "Id": 104564,
          "Text": "OnDateChangedListener"
        }, {
          "Id": 104565,
          "Text": "OnDateSetListener"
        }]
      }, {
        "Id": 25223,
        "Text": "SlidingDrawer chỉ được sử dụng bên trong layout nào?",
        "Marks": 1,
        "AnswerId": 104569,
        "Answers": [{
          "Id": 104566,
          "Text": "Absolute Layout"
        }, {
          "Id": 104567,
          "Text": "Relative Layout"
        }, {
          "Id": 104568,
          "Text": "Frame layout"
        }, {
          "Id": 104569,
          "Text": "Frame layout và Relative Layout"
        }]
      }, {
        "Id": 25224,
        "Text": "Trong Android, loại tab nào cố định không thể cuộn được?",
        "Marks": 1,
        "AnswerId": 104572,
        "Answers": [{
          "Id": 104570,
          "Text": "Home Tabs"
        }, {
          "Id": 104571,
          "Text": "Scrollalbe Tabs"
        }, {
          "Id": 104572,
          "Text": "Fixed Tabs"
        }, {
          "Id": 104573,
          "Text": "Không có tab nào có thể cuộn được"
        }]
      }, {
        "Id": 25225,
        "Text": "Phải sử dụng phương thức OnDateChangedListener khi người dùng thay đổi ngày tháng năm trên điều khiển DatePicker?",
        "Marks": 1,
        "AnswerId": 104575,
        "Answers": [{
          "Id": 104574,
          "Text": "Sai"
        }, {
          "Id": 104575,
          "Text": "Đúng"
        }]
      }, {
        "Id": 25226,
        "Text": "Tab Selector có những loại sau?",
        "Marks": 1,
        "AnswerId": 104577,
        "Answers": [{
          "Id": 104576,
          "Text": "Scrollalbe Tabs"
        }, {
          "Id": 104577,
          "Text": "Scrollalbe Tabs và Fixed Tabs"
        }, {
          "Id": 104578,
          "Text": "Fixed Tabs"
        }, {
          "Id": 104579,
          "Text": "Tất cả các phương án đều sai"
        }]
      }, {
        "Id": 25227,
        "Text": "Các thành phần của Tab Selector gồm có?",
        "Marks": 1,
        "AnswerId": 104581,
        "Answers": [{
          "Id": 104580,
          "Text": "TabHost"
        }, {
          "Id": 104581,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 104582,
          "Text": "TabWidget"
        }, {
          "Id": 104583,
          "Text": "FrameLayout"
        }]
      }, {
        "Id": 25228,
        "Text": "Phải sử dụng phương thức OnTimeChangedListener khi người dùng thay đổi thời gian giờ phút giây?",
        "Marks": 1,
        "AnswerId": 104584,
        "Answers": [{
          "Id": 104584,
          "Text": "Đúng"
        }, {
          "Id": 104585,
          "Text": "Sai"
        }]
      }, {
        "Id": 25229,
        "Text": "Để hiển thị ngày, tháng năm trong Android, ta có thể dùng điều khiển nào?",
        "Marks": 1,
        "AnswerId": 104589,
        "Answers": [{
          "Id": 104586,
          "Text": "DatePicker"
        }, {
          "Id": 104587,
          "Text": "DatePickerDialog"
        }, {
          "Id": 104588,
          "Text": "TimePicker"
        }, {
          "Id": 104589,
          "Text": "DatePicker và DatePickerDialog"
        }]
      }, {
        "Id": 25230,
        "Text": "Để thiết lập giờ, phút, giây trong Android, ta có thể dùng điều khiển nào?",
        "Marks": 1,
        "AnswerId": 104593,
        "Answers": [{
          "Id": 104590,
          "Text": "TimePicker"
        }, {
          "Id": 104591,
          "Text": "DatePicker"
        }, {
          "Id": 104592,
          "Text": "TimePickerDialog"
        }, {
          "Id": 104593,
          "Text": "TimePicker và TimePickerDialog"
        }]
      }, {
        "Id": 25231,
        "Text": "Layout được sử dụng trong Tab content là?",
        "Marks": 1,
        "AnswerId": 104594,
        "Answers": [{
          "Id": 104594,
          "Text": "Frame Layout"
        }, {
          "Id": 104595,
          "Text": "Relative Layout"
        }, {
          "Id": 104596,
          "Text": "Linear Layout"
        }, {
          "Id": 104597,
          "Text": "Table layout"
        }]
      }, {
        "Id": 25232,
        "Text": "EditText cho phép hiển thị action như Send ngay trên bàn phím, hỗ trợ nhanh thao tác gửi tin nhắn bằng cách khai báo thuộc tính như thế nào?",
        "Marks": 1,
        "AnswerId": 104600,
        "Answers": [{
          "Id": 104598,
          "Text": "android:imeOptions=\"actionNone\""
        }, {
          "Id": 104599,
          "Text": "android:imeOptions=\"actionSearch\""
        }, {
          "Id": 104600,
          "Text": "android:imeOptions=\"actionSend\""
        }, {
          "Id": 104601,
          "Text": "android:imeOptions=\"actionSend\" và android:imeOptions=\"actionSearch\""
        }]
      }, {
        "Id": 25233,
        "Text": "Khi thực hiện chức năng Search để tạo một truy vấn sử dụng những từ đã truy cập gần đây cần thực hiện bước nào đầu tiên?",
        "Marks": 1,
        "AnswerId": 104603,
        "Answers": [{
          "Id": 104602,
          "Text": "Tạo một content provider để chứa nội dung search, được kế thừa từ SearchRecentSuggestionsProvider và được khai báo trong manifest"
        }, {
          "Id": 104603,
          "Text": "Tạo một searchable activity"
        }, {
          "Id": 104604,
          "Text": "Lưu chuỗi truy vấn vào content provider mỗi lần thực hiện lệnh search"
        }, {
          "Id": 104605,
          "Text": "Chỉnh sửa cấu hình searchable"
        }]
      }, {
        "Id": 25234,
        "Text": "Để hiển thị thông báo ta có thể sử dụng điều khiển nào?",
        "Marks": 1,
        "AnswerId": 104609,
        "Answers": [{
          "Id": 104606,
          "Text": "Alert Dialog"
        }, {
          "Id": 104607,
          "Text": "Message"
        }, {
          "Id": 104608,
          "Text": "Toast"
        }, {
          "Id": 104609,
          "Text": "Toast và Alert Dialog"
        }]
      }, {
        "Id": 25235,
        "Text": "Trong EditText để nhập text có chứa dạng số cần nhập giá trị nào vào thuộc tính android:inputType?",
        "Marks": 1,
        "AnswerId": 104612,
        "Answers": [{
          "Id": 104610,
          "Text": "text"
        }, {
          "Id": 104611,
          "Text": "textEmailAddress"
        }, {
          "Id": 104612,
          "Text": "number"
        }, {
          "Id": 104613,
          "Text": "textUri"
        }]
      }, {
        "Id": 25236,
        "Text": "Để hiển thị thông báo trong các mục thiết lập thông số cấu hình, hay đơn giản chỉ là hiển thị lên để xem thông tin tạm thời nào đó mà không cho phép người sử dụng tương tác ta dùng lớp nào?",
        "Marks": 1,
        "AnswerId": 104616,
        "Answers": [{
          "Id": 104614,
          "Text": "Notification"
        }, {
          "Id": 104615,
          "Text": "Alert Dialog"
        }, {
          "Id": 104616,
          "Text": "Toast"
        }, {
          "Id": 104617,
          "Text": "Tất cả các phương án đều đúng"
        }]
      }, {
        "Id": 25237,
        "Text": "Để hiển thị Toast trong 2 giây ta sử dụng giá trị sau?",
        "Marks": 1,
        "AnswerId": 104620,
        "Answers": [{
          "Id": 104618,
          "Text": "Toast.LENGTH_LONG"
        }, {
          "Id": 104619,
          "Text": "Toast.LONG"
        }, {
          "Id": 104620,
          "Text": "Toast.LENGTH_SHORT"
        }, {
          "Id": 104621,
          "Text": "Toast.SHORT"
        }]
      }, {
        "Id": 25238,
        "Text": "Để hiển thị Dialog ta dùng phương thức nào?",
        "Marks": 1,
        "AnswerId": 104625,
        "Answers": [{
          "Id": 104622,
          "Text": "hide()"
        }, {
          "Id": 104623,
          "Text": "onDialog()"
        }, {
          "Id": 104624,
          "Text": "create()"
        }, {
          "Id": 104625,
          "Text": "show()"
        }]
      }, {
        "Id": 25239,
        "Text": "Trong EditText để nhập text có chứa dạng số điện thoại cần nhập giá trị nào vào thuộc tính android:inputType?",
        "Marks": 1,
        "AnswerId": 104629,
        "Answers": [{
          "Id": 104626,
          "Text": "android:inputType =\"textUri\""
        }, {
          "Id": 104627,
          "Text": "android:inputType =\"number\""
        }, {
          "Id": 104628,
          "Text": "android:inputType =\"textEmailAddress\""
        }, {
          "Id": 104629,
          "Text": "android:inputType =\"phone”"
        }]
      }, {
        "Id": 25240,
        "Text": "Khi cấu hình một thẻ Searchable để gán các thuộc tính như: voice search, search suggestion hoặc hint text cho hộp thoại search, người ta tạo một file searchable.xml trong thư mục nào?",
        "Marks": 1,
        "AnswerId": 104632,
        "Answers": [{
          "Id": 104630,
          "Text": "/res/values"
        }, {
          "Id": 104631,
          "Text": "/res/layout"
        }, {
          "Id": 104632,
          "Text": "/res/xml"
        }, {
          "Id": 104633,
          "Text": "/res/menu"
        }]
      }, {
        "Id": 25241,
        "Text": "Để xóa lịch sửa truy vấn sử dụng phương thức nào của SearchRecentSuggestions?",
        "Marks": 1,
        "AnswerId": 104635,
        "Answers": [{
          "Id": 104634,
          "Text": ".hide()"
        }, {
          "Id": 104635,
          "Text": ".clearHistory()"
        }, {
          "Id": 104636,
          "Text": ".clear()"
        }, {
          "Id": 104637,
          "Text": ".hideHistory()"
        }]
      }, {
        "Id": 25242,
        "Text": "Phương thức nào của WebView dùng để xóa cache trên trình duyệt?",
        "Marks": 1,
        "AnswerId": 104641,
        "Answers": [{
          "Id": 104638,
          "Text": "clearCacheBrowner()"
        }, {
          "Id": 104639,
          "Text": "clear()"
        }, {
          "Id": 104640,
          "Text": "clearCaches()"
        }, {
          "Id": 104641,
          "Text": "clearCache()"
        }]
      }, {
        "Id": 25243,
        "Text": "Loại menu nào trong Android được kích hoạt bằng cách nhấn vào nút Menu?",
        "Marks": 1,
        "AnswerId": 104645,
        "Answers": [{
          "Id": 104642,
          "Text": "Popup menu"
        }, {
          "Id": 104643,
          "Text": "Không có loại menu nào"
        }, {
          "Id": 104644,
          "Text": "Context menu"
        }, {
          "Id": 104645,
          "Text": "Option menu"
        }]
      }, {
        "Id": 25244,
        "Text": "Phương thức nào dùng để xử lý sự kiện, để tìm ra xem menu nào được lựa chọn?",
        "Marks": 1,
        "AnswerId": 104648,
        "Answers": [{
          "Id": 104646,
          "Text": "registerForContextMenu()"
        }, {
          "Id": 104647,
          "Text": "getResources().getColor()"
        }, {
          "Id": 104648,
          "Text": "onContextItemSelected()"
        }, {
          "Id": 104649,
          "Text": "onCreateContextMenu()"
        }]
      }, {
        "Id": 25245,
        "Text": "Thực hiện phương thức nào dùng để nạp Context Menu XML vào ứng dụng. phương thức sẽ được gọi mỗi khi context menu được yêu cầu?",
        "Marks": 1,
        "AnswerId": 104652,
        "Answers": [{
          "Id": 104650,
          "Text": "registerForContextMenu()"
        }, {
          "Id": 104651,
          "Text": "onContextItemSelected()"
        }, {
          "Id": 104652,
          "Text": "onCreateContextMenu()"
        }, {
          "Id": 104653,
          "Text": "getResources().getColor()"
        }]
      }, {
        "Id": 25246,
        "Text": "Câu nào là đúng đối với menu trong Android?",
        "Marks": 1,
        "AnswerId": 104654,
        "Answers": [{
          "Id": 104654,
          "Text": "Phải đăng ký Popup Menu cho đối tượng sau đó muốn hiển thị lên thì ta nhấn thật lâu vào đối tượng (long click )"
        }, {
          "Id": 104655,
          "Text": "Không thể tạo Context menu trong code"
        }, {
          "Id": 104656,
          "Text": "Phải đăng ký Option Menu cho đối tượng sau đó muốn hiển thị lên thì ta nhấn thật lâu vào đối tượng (long click )"
        }, {
          "Id": 104657,
          "Text": "Có thể tạo Menu động trong code"
        }]
      }, {
        "Id": 25247,
        "Text": "Để bật Javascript, gọi : myWebView.setSettings().setJavaScriptEnabled(true); đối với đối tượng WebView\u003e, điều này đúng hay sai?",
        "Marks": 1,
        "AnswerId": 104659,
        "Answers": [{
          "Id": 104658,
          "Text": "Sai"
        }, {
          "Id": 104659,
          "Text": "Đúng"
        }]
      }, {
        "Id": 25248,
        "Text": "Để định nghĩa menu, tạo một file xml trong thư mục nào của dự án?",
        "Marks": 1,
        "AnswerId": 104662,
        "Answers": [{
          "Id": 104660,
          "Text": "res/values/"
        }, {
          "Id": 104661,
          "Text": "res/layout/"
        }, {
          "Id": 104662,
          "Text": "res/menu/"
        }, {
          "Id": 104663,
          "Text": "res/xml/"
        }]
      }, {
        "Id": 25249,
        "Text": "Sử dụng thuộc tính android:showAsAction=\"always\" cho item của menu có nghĩa là item sẽ luôn xuất hiện trên thanh action bar, điều này đúng hay sai?",
        "Marks": 1,
        "AnswerId": 104665,
        "Answers": [{
          "Id": 104664,
          "Text": "Đúng"
        }, {
          "Id": 104665,
          "Text": "Sai"
        }]
      }, {
        "Id": 25250,
        "Text": "Để tải trang web cần hiển thị lên WebView ta sử dụng phương thức sau?",
        "Marks": 1,
        "AnswerId": 104667,
        "Answers": [{
          "Id": 104666,
          "Text": ".loadView(….)"
        }, {
          "Id": 104667,
          "Text": ".loadUrl(...)"
        }, {
          "Id": 104668,
          "Text": ".loadData(….)"
        }, {
          "Id": 104669,
          "Text": ".loadWeb(…)"
        }]
      }, {
        "Id": 25251,
        "Text": "Trong android có mấy loại menu?",
        "Marks": 1,
        "AnswerId": 104671,
        "Answers": [{
          "Id": 104670,
          "Text": "4"
        }, {
          "Id": 104671,
          "Text": "3"
        }, {
          "Id": 104672,
          "Text": "5"
        }, {
          "Id": 104673,
          "Text": "2"
        }]
      }, {
        "Id": 25252,
        "Text": "Để Navigation Drawer được gọi từ trái qua phải ta sẽ khai báo như thế nào?",
        "Marks": 1,
        "AnswerId": 104677,
        "Answers": [{
          "Id": 104674,
          "Text": "android:layout_gravity=”right”"
        }, {
          "Id": 104675,
          "Text": "android:layout_gravity=”left”"
        }, {
          "Id": 104676,
          "Text": "android:layout_gravity=”end”"
        }, {
          "Id": 104677,
          "Text": "android:layout_gravity=”start”"
        }]
      }, {
        "Id": 25253,
        "Text": "Chiều cao của mỗi item trên Navigation Drawer không nên nhỏ hơn bao nhiêu?",
        "Marks": 1,
        "AnswerId": 104679,
        "Answers": [{
          "Id": 104678,
          "Text": "47dp"
        }, {
          "Id": 104679,
          "Text": "48dp"
        }, {
          "Id": 104680,
          "Text": "49dp"
        }, {
          "Id": 104681,
          "Text": "46dp"
        }]
      }, {
        "Id": 25254,
        "Text": "Thông thường ta có thể đặt action bar ở những vị trí nào sau đây?",
        "Marks": 1,
        "AnswerId": 104685,
        "Answers": [{
          "Id": 104682,
          "Text": "Main action bar"
        }, {
          "Id": 104683,
          "Text": "Top bar"
        }, {
          "Id": 104684,
          "Text": "Bottom bar"
        }, {
          "Id": 104685,
          "Text": "Tất cả các phương án đều đúng"
        }]
      }, {
        "Id": 25255,
        "Text": "Để chứa các action ít thực hiện dưới dạng các menu ta sẽ thiết kế vùng action bar nào?",
        "Marks": 1,
        "AnswerId": 104686,
        "Answers": [{
          "Id": 104686,
          "Text": "Action Overflow"
        }, {
          "Id": 104687,
          "Text": "App icon"
        }, {
          "Id": 104688,
          "Text": "View Control"
        }, {
          "Id": 104689,
          "Text": "Action Button"
        }]
      }, {
        "Id": 25256,
        "Text": "Thay đổi một Action Bar Icon bằng một icon khác ta sử dụng phương thức nào?",
        "Marks": 1,
        "AnswerId": 104693,
        "Answers": [{
          "Id": 104690,
          "Text": "actionBar.getIcon(R.drawable.ico_actionbar)"
        }, {
          "Id": 104691,
          "Text": "actionBar.hideIcon(R.drawable.ico_actionbar)"
        }, {
          "Id": 104692,
          "Text": "actionBar.showIcon(R.drawable.ico_actionbar)"
        }, {
          "Id": 104693,
          "Text": "actionBar.setIcon(R.drawable.ico_actionbar)"
        }]
      }, {
        "Id": 25257,
        "Text": "Khởi tạo sự kiện mở, đóng navigation drawer bằng phương thức nào?",
        "Marks": 1,
        "AnswerId": 104694,
        "Answers": [{
          "Id": 104694,
          "Text": "onDrawerClosed(view)   và onDrawerOpened(drawerView)"
        }, {
          "Id": 104695,
          "Text": "onDrawerClose(view)   và onDrawerOpene(drawerView)"
        }, {
          "Id": 104696,
          "Text": "onClosedDrawer(view)   và onOpenedDrawer(drawerView"
        }, {
          "Id": 104697,
          "Text": "onClosed(view)   và onOpened(drawerView)"
        }]
      }, {
        "Id": 25258,
        "Text": "Khi khai báo một Action item, để hiển thị icon của action nếu không gian màn hình cho phép ta dùng?",
        "Marks": 1,
        "AnswerId": 104699,
        "Answers": [{
          "Id": 104698,
          "Text": "android:showAsAction=\"Always\""
        }, {
          "Id": 104699,
          "Text": "android:showAsAction=\"ifRoom\""
        }, {
          "Id": 104700,
          "Text": "android:showAsAction=\"Never\""
        }, {
          "Id": 104701,
          "Text": "android:showAsAction=\"withText\""
        }]
      }, {
        "Id": 25259,
        "Text": "Trong những vùng sau, đâu là vùng chức năng của Action bar?",
        "Marks": 1,
        "AnswerId": 104704,
        "Answers": [{
          "Id": 104702,
          "Text": "Button Overflow"
        }, {
          "Id": 104703,
          "Text": "Label Overflow"
        }, {
          "Id": 104704,
          "Text": "View Control"
        }, {
          "Id": 104705,
          "Text": "Text Overflow"
        }]
      }, {
        "Id": 25260,
        "Text": "Navigation Drawer là một bảng điều hướng xuất hiện khi nào ?",
        "Marks": 1,
        "AnswerId": 104706,
        "Answers": [{
          "Id": 104706,
          "Text": "Vuốt từ trên xuống"
        }, {
          "Id": 104707,
          "Text": "Bật ứng dụng Gmail"
        }, {
          "Id": 104708,
          "Text": "Nhìn bằng mắt vào điện thoại"
        }, {
          "Id": 104709,
          "Text": "Lắc điện thoại"
        }]
      }, {
        "Id": 25261,
        "Text": "Action Buttons có phải là một vùng chức năng của Action Bar?",
        "Marks": 1,
        "AnswerId": 104711,
        "Answers": [{
          "Id": 104710,
          "Text": "Sai"
        }, {
          "Id": 104711,
          "Text": "Đúng"
        }]
      }]
    },
    {
      "Id": "ASNE",
      "quiz": [{
        "Id": 25970,
        "Text": "Lập trình viên thường gán giá trị mặc định cho các điều khiển trong phương thức xử lý sự kiện ........... của trang",
        "Marks": 1,
        "AnswerId": 107573,
        "Answers": [{
          "Id": 107571,
          "Text": "Prerender"
        }, {
          "Id": 107572,
          "Text": "Init"
        }, {
          "Id": 107573,
          "Text": "Load"
        }, {
          "Id": 107574,
          "Text": "Unload"
        }]
      }, {
        "Id": 25971,
        "Text": "Bạn hãy cho biết định nghĩa nào sau đây là nói về ứng dụng web?",
        "Marks": 1,
        "AnswerId": 107575,
        "Answers": [{
          "Id": 107575,
          "Text": "Là một ứng dụng client/server được truy cập thông qua trình duyệt Web trên mạng Internet hoặc intranet"
        }, {
          "Id": 107576,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 107577,
          "Text": "Là ứng dụng chỉ chạy trên một máy tính đơn"
        }, {
          "Id": 107578,
          "Text": "Là ứng dụng chỉ chạy trên môi trường mobile"
        }]
      }, {
        "Id": 25972,
        "Text": "Để hiển thị dòng \"Hello World\" trên trang web, trong ASP.Net cần dùng lệnh nào?",
        "Marks": 1,
        "AnswerId": 107582,
        "Answers": [{
          "Id": 107579,
          "Text": "Document.Write(\"Hello World\");"
        }, {
          "Id": 107580,
          "Text": "\"Hello World\""
        }, {
          "Id": 107581,
          "Text": "Request.Write((\"Hello World\");"
        }, {
          "Id": 107582,
          "Text": "Response.Write(\"Hello World\");"
        }]
      }, {
        "Id": 25973,
        "Text": "Phát biểu nào sau đây đúng về ASP.NET?",
        "Marks": 1,
        "AnswerId": 107584,
        "Answers": [{
          "Id": 107583,
          "Text": "ASP.NET là mô hình lập trình hướng cấu trúc"
        }, {
          "Id": 107584,
          "Text": "ASP.NET là mô hình lập trình hướng sự kiện"
        }, {
          "Id": 107585,
          "Text": "ASP.NET là mô hình lập trình hướng thành phần"
        }, {
          "Id": 107586,
          "Text": "ASP.NET là mô hình lập trình hướng đối tượng"
        }]
      }, {
        "Id": 25974,
        "Text": "Khi chạy một ứng dụng ASP.NET, nếu ngoại lệ xảy ra nhưng không được bắt và xử lý, ứng dụng sẽ chuyển sang chế độ ngắt và hộp thoại ............ sẽ hiển thị.",
        "Marks": 1,
        "AnswerId": 107587,
        "Answers": [{
          "Id": 107587,
          "Text": "Exception Assistant"
        }, {
          "Id": 107588,
          "Text": "Exception Help"
        }, {
          "Id": 107589,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107590,
          "Text": "Exception"
        }]
      }, {
        "Id": 25975,
        "Text": "Theo bạn, câu nào sau đây là sai khi nói về web động?",
        "Marks": 1,
        "AnswerId": 107591,
        "Answers": [{
          "Id": 107591,
          "Text": "Viết hoàn toàn bằng ngôn ngữ HTML"
        }, {
          "Id": 107592,
          "Text": "Có tương tác với người dùng, nội dung của trang hiển thị khác nhau đáp ứng các sự kiện."
        }, {
          "Id": 107593,
          "Text": "Có thể dùng để hiển thị và cung cấp thông tin"
        }, {
          "Id": 107594,
          "Text": "Lưu dữ liệu trong cơ sở dữ liệu"
        }]
      }, {
        "Id": 25976,
        "Text": "Vòng đời của một trang Web bao gồm các các sự kiện:1. PreRender2. Load3. UnLoad4. InitTheo bạn, các sự kiện xảy ra theo thứ tự nào sau đây là đúng?",
        "Marks": 1,
        "AnswerId": 107595,
        "Answers": [{
          "Id": 107595,
          "Text": "4 - 2 – 3 – 1"
        }, {
          "Id": 107596,
          "Text": "4 - 3 – 2 – 1"
        }, {
          "Id": 107597,
          "Text": "2 - 3 – 4 – 1"
        }, {
          "Id": 107598,
          "Text": "1 - 2 - 3 – 4"
        }]
      }, {
        "Id": 25977,
        "Text": "Phím tắt nào sau đây dùng để bắt đầu chạy ứng dụng dưới chế độ gỡ lỗi?",
        "Marks": 1,
        "AnswerId": 107599,
        "Answers": [{
          "Id": 107599,
          "Text": "F9"
        }, {
          "Id": 107600,
          "Text": "F10"
        }, {
          "Id": 107601,
          "Text": "F5"
        }, {
          "Id": 107602,
          "Text": "F11"
        }]
      }, {
        "Id": 25978,
        "Text": "Lớp nào sau đây được ASP.NET cung cấp để duy trì các thông tin trao đổi giữa Client và Server?",
        "Marks": 1,
        "AnswerId": 107603,
        "Answers": [{
          "Id": 107603,
          "Text": "HttpResponse"
        }, {
          "Id": 107604,
          "Text": "Các phươn án đều đúng"
        }, {
          "Id": 107605,
          "Text": "HttpServerUtility"
        }, {
          "Id": 107606,
          "Text": "HttpRequest"
        }]
      }, {
        "Id": 25979,
        "Text": "Theo bạn, sự kiện nào sau đây được xem là sự kiện tự động kích hoạt?",
        "Marks": 1,
        "AnswerId": 107607,
        "Answers": [{
          "Id": 107607,
          "Text": "Tải trang (Page_load)"
        }, {
          "Id": 107608,
          "Text": "Thay đổi giá trị ở TextBox (changeText)"
        }, {
          "Id": 107609,
          "Text": "Nhấn chuột vào một nút (button_click)"
        }, {
          "Id": 107610,
          "Text": "Đóng cửa sổ trình duyệt (close window)"
        }]
      }, {
        "Id": 25980,
        "Text": "Các lớp tạo ra các điều khiển Web server nằm trong namespace nào?",
        "Marks": 1,
        "AnswerId": 107611,
        "Answers": [{
          "Id": 107611,
          "Text": "System.Web.UI.WebControls"
        }, {
          "Id": 107612,
          "Text": "System.Windows.Page. WebControls"
        }, {
          "Id": 107613,
          "Text": "System.Web.UI.Controls"
        }, {
          "Id": 107614,
          "Text": "System.web.UI.Page"
        }]
      }, {
        "Id": 25981,
        "Text": "Những điều khiển nào sau đây thuộc về loại List Control?",
        "Marks": 1,
        "AnswerId": 107615,
        "Answers": [{
          "Id": 107615,
          "Text": "DropDownList, ListBox, RadioButtonList, CheckBoxList, BulletedList"
        }, {
          "Id": 107616,
          "Text": "ComboboxList, ListBox, HyperLinkList, CheckBoxList, BulletedList"
        }, {
          "Id": 107617,
          "Text": "ComboboxList, ListBox, RadioButtonList, CheckBoxList, BulletedList"
        }, {
          "Id": 107618,
          "Text": "DropdownList, ButtonList , RadioButtonList, CheckBoxList, ListBox"
        }]
      }, {
        "Id": 25982,
        "Text": "Để che dấu các kí tự nhập vào một text box bạn gán giá trị cho thuộc tính TextMode bằng giá trị nào dưới đây?",
        "Marks": 1,
        "AnswerId": 107619,
        "Answers": [{
          "Id": 107619,
          "Text": "Password"
        }, {
          "Id": 107620,
          "Text": "Hidden"
        }, {
          "Id": 107621,
          "Text": "Mask"
        }, {
          "Id": 107622,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 25983,
        "Text": "Chọn phương án đúng về điều khiển FileUpLoad:",
        "Marks": 1,
        "AnswerId": 107623,
        "Answers": [{
          "Id": 107623,
          "Text": "Sử dụng phương thức SaveAs(String) để lưu file được upload tới một đường dẫn được chỉ định trong tham số String"
        }, {
          "Id": 107624,
          "Text": "Hỗ trợ một button cho phép người dùng gửi yêu cầu upload File được chọn lên Server"
        }, {
          "Id": 107625,
          "Text": "Sử dụng phương thức Save(String) để lưu file được upload tới một đường dẫn được chỉ định trong tham số String"
        }, {
          "Id": 107626,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 25984,
        "Text": "Để một Check Box hiển thị trên trình duyệt với một dấu tích chọn , bạn gán giá trị True cho thuộc tính nào dưới đây?",
        "Marks": 1,
        "AnswerId": 107629,
        "Answers": [{
          "Id": 107627,
          "Text": "Selected"
        }, {
          "Id": 107628,
          "Text": "Chosen"
        }, {
          "Id": 107629,
          "Text": "Checked"
        }, {
          "Id": 107630,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 25985,
        "Text": "Mã lệnh nào sau đây cho phép tạo ra điều khiển Hyperlink trong ASP.Net liên kết đến trang index.aspx của website, có đoạn văn bản hiển thị trên điều khiển là “Trang chủ” và hình ảnh được hiển thị là icon “home.gif”?",
        "Marks": 1,
        "AnswerId": 107631,
        "Answers": [{
          "Id": 107631,
          "Text": "\u003casp:HyperLink ID=\"HyperLink1\" runat=\"server\" ImageUrl=\"home.gif\" NavigateUrl=\"index.apsx\"\u003eTrang chủ\u003c/asp:HyperLink\u003e"
        }, {
          "Id": 107632,
          "Text": "\u003casp:HyperLink ID=\"HyperLink1\" runat=\"server\" ImageUrl=\"home.gif\" href=\"index.apsx\" text= “Trang chủ”\u003e\u003c/asp:HyperLink\u003e"
        }, {
          "Id": 107633,
          "Text": "\u003casp:HyperLink ID=\"HyperLink1\" runat=\"server\" Image=\"home.gif\" href =\"index.apsx\"\u003eTrang chủ\u003c/asp:HyperLink\u003e"
        }, {
          "Id": 107634,
          "Text": "\u003casp:HyperLink ID=\"HyperLink1\" runat=\"server\" Image=\"home.gif\" NavigateUrl=\"index.apsx\" text= “Trang chủ”\u003e\u003c/asp:HyperLink\u003e"
        }]
      }, {
        "Id": 25986,
        "Text": "Thuộc tính GroupName là thuộc tính của điều khiển nào sau đây?",
        "Marks": 1,
        "AnswerId": 107638,
        "Answers": [{
          "Id": 107635,
          "Text": "Check box"
        }, {
          "Id": 107636,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 107637,
          "Text": "Radio button List"
        }, {
          "Id": 107638,
          "Text": "Radio button"
        }]
      }, {
        "Id": 25987,
        "Text": "Để một điều khiển HTML được nhận diện như là một điều khiển trên Server, bạn  phải:A. Gán giá trị cho thuộc tính Runat của điều khiển bằng \"Server\"B. Gán giá trị cho thuộc tính Server của điều khiển bằng \"Runat\"",
        "Marks": 1,
        "AnswerId": 107639,
        "Answers": [{
          "Id": 107639,
          "Text": "Cả A, B đều đúng"
        }, {
          "Id": 107640,
          "Text": "B đúng"
        }, {
          "Id": 107641,
          "Text": "Cả A, B đều sai"
        }, {
          "Id": 107642,
          "Text": "A đúng"
        }]
      }, {
        "Id": 25988,
        "Text": "ddlDay là một drop-down list. Câu lệnh nào sau đây thực hiện thêm một phần tử vào drop-down list",
        "Marks": 1,
        "AnswerId": 107646,
        "Answers": [{
          "Id": 107643,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107644,
          "Text": "ddlDay.Add(new ListItem (\"Sunday\", \"1\"));"
        }, {
          "Id": 107645,
          "Text": "ddlDay.ListItems.Add(new ListItem(\"Sunday\", \"1\"));"
        }, {
          "Id": 107646,
          "Text": "ddlDay.Items.Add(new ListItem(\"Sunday\", \"1\"));"
        }]
      }, {
        "Id": 25989,
        "Text": "Sự kiện Click là sự kiện của điều khiển nào sau đây?A. ImageMapB. ButtonC. Text box",
        "Marks": 1,
        "AnswerId": 107649,
        "Answers": [{
          "Id": 107647,
          "Text": "A đúng"
        }, {
          "Id": 107648,
          "Text": "B đúng"
        }, {
          "Id": 107649,
          "Text": "A, B đúng"
        }, {
          "Id": 107650,
          "Text": "Cả A, B, C đều đúng"
        }]
      }, {
        "Id": 25990,
        "Text": "Điều khiển nào dùng để hiển thị tổng hợp tất cả lỗi của các Validator trên trang?",
        "Marks": 1,
        "AnswerId": 107653,
        "Answers": [{
          "Id": 107651,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107652,
          "Text": "SummaryValidator"
        }, {
          "Id": 107653,
          "Text": "ValidationSummary"
        }, {
          "Id": 107654,
          "Text": "CustomValidator"
        }]
      }, {
        "Id": 25991,
        "Text": "Chọn phương án đúng khi nói về CompareValidator:",
        "Marks": 1,
        "AnswerId": 107657,
        "Answers": [{
          "Id": 107655,
          "Text": "Kiểm tra kiểu dữ liệu nhập vào điều khiển nhập liệu"
        }, {
          "Id": 107656,
          "Text": "So sánh giá trị điều khiển nhập liệu với hằng số"
        }, {
          "Id": 107657,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 107658,
          "Text": "So sánh giá trị của điều khiển nhập liệu với giá trị của một điều khiển khác"
        }]
      }, {
        "Id": 25992,
        "Text": "ASP.NET cung cấp mấy loại điều khiển Validation?",
        "Marks": 1,
        "AnswerId": 107661,
        "Answers": [{
          "Id": 107659,
          "Text": "4"
        }, {
          "Id": 107660,
          "Text": "3"
        }, {
          "Id": 107661,
          "Text": "6"
        }, {
          "Id": 107662,
          "Text": "5"
        }]
      }, {
        "Id": 25993,
        "Text": "Phát biểu về Cookie nào sau đây là đúng?",
        "Marks": 1,
        "AnswerId": 107663,
        "Answers": [{
          "Id": 107663,
          "Text": "Ứng dụng gửi một Cookie tới trình duyệt thông qua hồi đáp HTTP (HTTP Response)"
        }, {
          "Id": 107664,
          "Text": "Lập trình viên không thể sử dụng cookie để lưu trữ dữ liệu của riêng mình"
        }, {
          "Id": 107665,
          "Text": "Session Cookie được lưu trữ vĩnh viễn trên ổ đĩa máy Client"
        }, {
          "Id": 107666,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 25994,
        "Text": "Để bắt buộc người dùng phải thay đổi giá trị hiển thị mặc định trên một Text box, lập trình viên sử dụng điều khiển nào sau đây:",
        "Marks": 1,
        "AnswerId": 107667,
        "Answers": [{
          "Id": 107667,
          "Text": "RangeValidator"
        }, {
          "Id": 107668,
          "Text": "RequiredFieldValidator"
        }, {
          "Id": 107669,
          "Text": "CompareValidator"
        }, {
          "Id": 107670,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 25995,
        "Text": "ASP.NET cung cấp các phương pháp nào để duy trì trạng thái?",
        "Marks": 1,
        "AnswerId": 107671,
        "Answers": [{
          "Id": 107671,
          "Text": "Cả 3 phương án đã nêu"
        }, {
          "Id": 107672,
          "Text": "Trạng thái phiên làm việc"
        }, {
          "Id": 107673,
          "Text": "Trạng thái hiển thị"
        }, {
          "Id": 107674,
          "Text": "Trạng thái ứng dụng"
        }]
      }, {
        "Id": 25996,
        "Text": "Để kiểm tra tính hợp lệ cho kiểu dữ liệu người dùng nhập lên một điều khiển nhập liệu, cần phải:",
        "Marks": 1,
        "AnswerId": 107678,
        "Answers": [{
          "Id": 107675,
          "Text": "Gán giá trị cho thuộc tính Operator bằng kiểu dữ liệu cần kiểm tra"
        }, {
          "Id": 107676,
          "Text": "Gán giá trị cho thuộc tính Type bằng kiểu dữ liệu cần kiểm tra"
        }, {
          "Id": 107677,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107678,
          "Text": "Gán giá trị cho thuộc tính Operator bằng DataCheckType và giá trị cho thuộc tính Type bằng kiểu dữ liệu cần kiểm tra"
        }]
      }, {
        "Id": 25997,
        "Text": "Phát biểu nào sau đây là đúng khi nói đến điều khiển Validation Summary?",
        "Marks": 1,
        "AnswerId": 107682,
        "Answers": [{
          "Id": 107679,
          "Text": "Thuộc tính ShowMessageBox của điều khiển Validation Summary có giá trị mặc định là “True”"
        }, {
          "Id": 107680,
          "Text": "Được sử dụng để kiểm tra tính hợp lệ của điều khiển nhập liệu có phép tính tổng"
        }, {
          "Id": 107681,
          "Text": "Hiển thị lỗi trong một tập tin xml"
        }, {
          "Id": 107682,
          "Text": "Được sử dụng để hiển thị toàn bộ thông tin lỗi của các validator trên trang"
        }]
      }, {
        "Id": 25998,
        "Text": "Để kiểm tra tính hợp lệ cho một trường bắt buộc người dùng nhập liệu, lập trình viên có thể sử dụng điều khiển ________",
        "Marks": 1,
        "AnswerId": 107685,
        "Answers": [{
          "Id": 107683,
          "Text": "RequiredValidator"
        }, {
          "Id": 107684,
          "Text": "RequiredFieldValidation"
        }, {
          "Id": 107685,
          "Text": "RequiredFieldValidator"
        }, {
          "Id": 107686,
          "Text": "RequiredFields"
        }]
      }, {
        "Id": 25999,
        "Text": "Nhóm điều khiển nào sau đây trên Toolbox, sử dụng để kiểm tra tính hợp lệ của dữ liệu nhập vào một web form?",
        "Marks": 1,
        "AnswerId": 107689,
        "Answers": [{
          "Id": 107687,
          "Text": "Navigation"
        }, {
          "Id": 107688,
          "Text": "Data"
        }, {
          "Id": 107689,
          "Text": "Validation"
        }, {
          "Id": 107690,
          "Text": "Standard"
        }]
      }, {
        "Id": 26000,
        "Text": "Để áp dụng theme tùy chỉnh cho toàn bộ các trang của một ứng dụng, bạn phải làm gì?",
        "Marks": 1,
        "AnswerId": 107694,
        "Answers": [{
          "Id": 107691,
          "Text": "Thêm phần tử Theme vào file web.config. Chỉ định giá trị thuộc tính fileName bằng tên Theme         \u003csystem.web\u003e                   \u003ctheme fileName=\"ThemeName\" /\u003e         \u003c/system.web\u003e"
        }, {
          "Id": 107692,
          "Text": "Thêm thuộc tính Theme vào chỉ dẫn Page     \u003c%@ Page=\"\" Language=\"C#\" Theme=\" ThemeName\" %\u003e"
        }, {
          "Id": 107693,
          "Text": "Thêm thuộc tính Skin vào chỉ dẫn Page     \u003c%@ Page=\"\" Language=\"C#\" Skin=\" ThemeName\" %\u003e"
        }, {
          "Id": 107694,
          "Text": "Thêm phần tử Pages vào file web.config. Chỉ định giá trị thuộc tính Theme bằng tên Theme         \u003csystem.web\u003e                   \u003cpages theme=\"ThemeName\" /\u003e         \u003c/system.web\u003e"
        }]
      }, {
        "Id": 26001,
        "Text": "Phát biểu nào sau đây ĐÚNG?",
        "Marks": 1,
        "AnswerId": 107697,
        "Answers": [{
          "Id": 107695,
          "Text": "Sự kiện của các điều khiển trên trang nội dung sẽ được xử lý sau trang master"
        }, {
          "Id": 107696,
          "Text": "Sự kiện Load của trang nội dung xảy ra sau sự kiện Load của trang master"
        }, {
          "Id": 107697,
          "Text": "Sự kiện Load của trang nội dung xảy ra trước sự kiện Load của trang master"
        }, {
          "Id": 107698,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 26002,
        "Text": "Để hủy Theme tùy chỉnh cho một trang web, sử dụng phương pháp nào sau đây?",
        "Marks": 1,
        "AnswerId": 107701,
        "Answers": [{
          "Id": 107699,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107700,
          "Text": "Thiết lập thuộc tính Theme của chỉ dẫn Page bằng False"
        }, {
          "Id": 107701,
          "Text": "Thiết lập thuộc tính Theme của chỉ dẫn Page bằng xâu rỗng"
        }, {
          "Id": 107702,
          "Text": "Thiết lập thuộc tính Theme của chỉ dẫn Page bằng True"
        }]
      }, {
        "Id": 26003,
        "Text": "Để áp dụng skin cho một điều khiển tại thời gian chạy, bạn cần gán giá trị cho thuộc tính SkinID của điều khiển trong phương thức xử lý sự kiện nào sau đây?",
        "Marks": 1,
        "AnswerId": 107703,
        "Answers": [{
          "Id": 107703,
          "Text": "PreInit"
        }, {
          "Id": 107704,
          "Text": "PreRender"
        }, {
          "Id": 107705,
          "Text": "Unload"
        }, {
          "Id": 107706,
          "Text": "Load"
        }]
      }, {
        "Id": 26004,
        "Text": "ASP.NET hỗ trợ cách định dạng hiển thị nào cho các thành phần trên trang web?",
        "Marks": 1,
        "AnswerId": 107707,
        "Answers": [{
          "Id": 107707,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 107708,
          "Text": "Sử dụng thuộc tính của các điều khiển"
        }, {
          "Id": 107709,
          "Text": "Sử dụng external style (File CSS)"
        }, {
          "Id": 107710,
          "Text": "Sử dụng internal style Sử dụng internal style"
        }]
      }, {
        "Id": 26005,
        "Text": "Phát biểu nào sau đây ĐÚNG ?",
        "Marks": 1,
        "AnswerId": 107711,
        "Answers": [{
          "Id": 107711,
          "Text": "Hai thành phần cơ bản của Theme là File Skin và File CSS"
        }, {
          "Id": 107712,
          "Text": "Theme chỉ sử dụng để định dạng hiển thị cho các phần tử HTML trên trang"
        }, {
          "Id": 107713,
          "Text": "Theme chỉ sử dụng để định dạng hiển thị cho các điều khiển web server"
        }, {
          "Id": 107714,
          "Text": "Chỉ được áp dụng một Theme cho một trang aspx"
        }]
      }, {
        "Id": 26006,
        "Text": "Điều khiển Navigation nào sau đây hiển thị dãy các liên kết từ trang chủ đến trang hiện tại?",
        "Marks": 1,
        "AnswerId": 107718,
        "Answers": [{
          "Id": 107715,
          "Text": "Menu"
        }, {
          "Id": 107716,
          "Text": "TreeView"
        }, {
          "Id": 107717,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107718,
          "Text": "SiteMapPath"
        }]
      }, {
        "Id": 26007,
        "Text": "Điều khiển nào sau đây không cần phải buộc với một điều khiển SiteMapDatasource, để hiển thị cấu trúc phân cấp điều hướng được định nghĩa trong file web.sitemap?",
        "Marks": 1,
        "AnswerId": 107720,
        "Answers": [{
          "Id": 107719,
          "Text": "TreeView"
        }, {
          "Id": 107720,
          "Text": "SiteMapPath"
        }, {
          "Id": 107721,
          "Text": "Menu"
        }, {
          "Id": 107722,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 26008,
        "Text": "Các style của ............ được áp dụng sau external, internal, inline style và các thuộc tính của điều khiển",
        "Marks": 1,
        "AnswerId": 107724,
        "Answers": [{
          "Id": 107723,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107724,
          "Text": "Theme tùy chỉnh"
        }, {
          "Id": 107725,
          "Text": "Theme tùy chỉnh và Theme StyleSheet"
        }, {
          "Id": 107726,
          "Text": "Theme StyleSheet"
        }]
      }, {
        "Id": 26009,
        "Text": "Sử dụng phương pháp nào sau đây để áp dụng Theme tùy chỉnh cho một trang web?",
        "Marks": 1,
        "AnswerId": 107727,
        "Answers": [{
          "Id": 107727,
          "Text": "Cả hai phương án đều đúng"
        }, {
          "Id": 107728,
          "Text": "Cả hai phương án đều sai"
        }, {
          "Id": 107729,
          "Text": "Thêm thuộc tính Theme vào chỉ dẫn Page của trang và gán tên của theme cho thuộc tính này."
        }, {
          "Id": 107730,
          "Text": "Gán giá trị cho thuộc tính Theme của lớp Page trong phương thức xử lý sự kiện Page_PreInit"
        }]
      }, {
        "Id": 26010,
        "Text": "Phát biểu nào sau đây Đúng về điều khiển data source?",
        "Marks": 1,
        "AnswerId": 107731,
        "Answers": [{
          "Id": 107731,
          "Text": "Điều khiển data source quản lý các tác vụ kết nối đến CSDL, đọc và ghi dữ liệu."
        }, {
          "Id": 107732,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107733,
          "Text": "Mỗi điều khiển data source chỉ được buộc vào một điều khiển hiển thị dữ liệu"
        }, {
          "Id": 107734,
          "Text": "Điều khiển data source dùng để hiển thị dữ liệu cho người dùng"
        }]
      }, {
        "Id": 26011,
        "Text": "Giả sử bạn đã thiết lập một chuỗi kết nối trong file web.config với tên “demoConnectionString” trong thẻ \"\u003cconnectionStrings\u003e\" Câu lệnh nào trong lớp code-behind để lấy thông tin chuỗi kết nối?",
        "Marks": 1,
        "AnswerId": 107738,
        "Answers": [{
          "Id": 107735,
          "Text": "ConnectionStrings[\"demoConnectionString\"].ConnectionString"
        }, {
          "Id": 107736,
          "Text": "WebConfigurationManager.ConnectionStrings[\"demoConnectionString\"]"
        }, {
          "Id": 107737,
          "Text": "ConnectionStrings[\"demoConnectionString\"]"
        }, {
          "Id": 107738,
          "Text": "WebConfigurationManager.ConnectionStrings[\"demoConnectionString\"].ConnectionString"
        }]
      }, {
        "Id": 26012,
        "Text": "Đối tượng nào sau đây sử dụng để lấy dữ liệu từ CSDL lưu vào dataset?",
        "Marks": 1,
        "AnswerId": 107742,
        "Answers": [{
          "Id": 107739,
          "Text": "DataReader"
        }, {
          "Id": 107740,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 107741,
          "Text": "Dataset"
        }, {
          "Id": 107742,
          "Text": "DataAdapter"
        }]
      }, {
        "Id": 26013,
        "Text": "Phát biểu nào sau đây là sai về ADO.Net?",
        "Marks": 1,
        "AnswerId": 107745,
        "Answers": [{
          "Id": 107743,
          "Text": "Các lớp của ADO.net được định nghĩa trong namespace System.Data"
        }, {
          "Id": 107744,
          "Text": "ADO.Net hỗ trợ các ứng dụng kết nối đến các cơ sở dữ liệu"
        }, {
          "Id": 107745,
          "Text": "ADO.Net không hỗ trợ kiến trúc không kết nối"
        }, {
          "Id": 107746,
          "Text": "Tất cả các phương án đã nêu"
        }]
      }, {
        "Id": 26014,
        "Text": "Phương thức nào sau đây của đối tượng Command sử dụng để xóa/cập nhật dữ liệu trong CSDL sử dụng kiến trúc kết nối?",
        "Marks": 1,
        "AnswerId": 107747,
        "Answers": [{
          "Id": 107747,
          "Text": "ExecuteNonQuery()"
        }, {
          "Id": 107748,
          "Text": "ExecuteReader()"
        }, {
          "Id": 107749,
          "Text": "ExecuteScalar()"
        }, {
          "Id": 107750,
          "Text": "Execute()"
        }]
      }, {
        "Id": 26015,
        "Text": "Phương thức nào sau đây không thuộc về lớp SqlDataAdapter?",
        "Marks": 1,
        "AnswerId": 107751,
        "Answers": [{
          "Id": 107751,
          "Text": "ReadData"
        }, {
          "Id": 107752,
          "Text": "FillSchema"
        }, {
          "Id": 107753,
          "Text": "Fill"
        }, {
          "Id": 107754,
          "Text": "Update"
        }]
      }, {
        "Id": 26016,
        "Text": "Lựa chọn đáp án đúng.Để liên kết điều khiển DataList với một SqlDataSouce, bạn chọn ............ trên menu thông minh",
        "Marks": 1,
        "AnswerId": 107756,
        "Answers": [{
          "Id": 107755,
          "Text": "Data Binding"
        }, {
          "Id": 107756,
          "Text": "Chose Data Source"
        }, {
          "Id": 107757,
          "Text": "Binding DataSource"
        }, {
          "Id": 107758,
          "Text": "Configure Data Source"
        }]
      }, {
        "Id": 26017,
        "Text": "Điều khiển data source nào sau đây hỗ trợ phát triển ứng dụng Web theo kiến trúc ba tầng?",
        "Marks": 1,
        "AnswerId": 107759,
        "Answers": [{
          "Id": 107759,
          "Text": "ObjectDataSource"
        }, {
          "Id": 107760,
          "Text": "AccessDataSource"
        }, {
          "Id": 107761,
          "Text": "SQLDataSource"
        }, {
          "Id": 107762,
          "Text": "Các phương án đều đúng"
        }]
      }, {
        "Id": 26018,
        "Text": "Thành phần nào của Data provider dùng để thực thi các lệnh sql lấy dữ liệu từ CSDL hoặc thay đổi dữ liệu trong CSDL?",
        "Marks": 1,
        "AnswerId": 107764,
        "Answers": [{
          "Id": 107763,
          "Text": "DataAdapter"
        }, {
          "Id": 107764,
          "Text": "SqlCommand"
        }, {
          "Id": 107765,
          "Text": "Connection"
        }, {
          "Id": 107766,
          "Text": "DataReader"
        }]
      }, {
        "Id": 26019,
        "Text": "Đối tượng nào sau đây tham gia trong quá trình truy cập CSDL sử dụng kiến trúc kết nối?A. DataReaderB. DataAdapter",
        "Marks": 1,
        "AnswerId": 107767,
        "Answers": [{
          "Id": 107767,
          "Text": "Cả A, B đều sai"
        }, {
          "Id": 107768,
          "Text": "A đúng"
        }, {
          "Id": 107769,
          "Text": "Cả A, B đều đúng"
        }, {
          "Id": 107770,
          "Text": "B đúng"
        }]
      }, {
        "Id": 26020,
        "Text": "Để kích hoạt tính năng sắp xếp của điều khiển GridView, bạn cần thực hiện các công việc gì?",
        "Marks": 1,
        "AnswerId": 107772,
        "Answers": [{
          "Id": 107771,
          "Text": "Thiết lập thuộc tính AllowSorting là “True”, sau đó thêm thuộc tính SortExpression vào mỗi cột muốn sắp xếp và thiết lập thuộc tính DataSourceMode của nguồn dữ liệu đặt ở chế độ DataSet"
        }, {
          "Id": 107772,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 107773,
          "Text": "Trong bảng Smart tag menu của GridView, kích chọn hộp kiểm “Enable Sorting”"
        }, {
          "Id": 107774,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 26021,
        "Text": "Các điều khiển nào sau đây cho phép hiển thị một hàng dữ liệu đơn từ datasource?",
        "Marks": 1,
        "AnswerId": 107778,
        "Answers": [{
          "Id": 107775,
          "Text": "DetailsView, GridView"
        }, {
          "Id": 107776,
          "Text": "GridView, ListView"
        }, {
          "Id": 107777,
          "Text": "DataList, ListView"
        }, {
          "Id": 107778,
          "Text": "DetailsView, FormView"
        }]
      }, {
        "Id": 26022,
        "Text": "Theo bạn, sự khác nhau của điều khiển GridView và ListView là gì?",
        "Marks": 1,
        "AnswerId": 107779,
        "Answers": [{
          "Id": 107779,
          "Text": "GridView trình bày dữ liệu dưới dạng bảng theo cột và hàng giống bảng trong CSDL còn ListView trình bày dữ liệu dưới dạng danh sách theo một template có sẵn"
        }, {
          "Id": 107780,
          "Text": "GridView có hỗ trợ phân trang còn ListView thì không"
        }, {
          "Id": 107781,
          "Text": "GridView hỗ trợ tính năng cập nhật CSDL, không hỗ trợ tính năng chèn mới dữ liệu còn ListView thì ngược lại, cho phép chèn dữ liệu nhưng không cho phép cập nhật dữ liệu."
        }, {
          "Id": 107782,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 26023,
        "Text": "Điều khiển nào sau đây bắt buộc phải dùng Template và biểu thức buộc dữ liệu để hiển thị các trường dữ liệu?",
        "Marks": 1,
        "AnswerId": 107784,
        "Answers": [{
          "Id": 107783,
          "Text": "GridView"
        }, {
          "Id": 107784,
          "Text": "FormView"
        }, {
          "Id": 107785,
          "Text": "DataList"
        }, {
          "Id": 107786,
          "Text": "DetailsView"
        }]
      }, {
        "Id": 26024,
        "Text": "Hãy chọn một phần tử của GridView",
        "Marks": 1,
        "AnswerId": 107787,
        "Answers": [{
          "Id": 107787,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 107788,
          "Text": "Asp:ImageField"
        }, {
          "Id": 107789,
          "Text": "Asp:HyperlinkField"
        }, {
          "Id": 107790,
          "Text": "Asp:CommandField"
        }]
      }, {
        "Id": 26025,
        "Text": "Thuộc tính nào của điều khiển GridView thiết lập số lượng hàng trong một trang ?",
        "Marks": 1,
        "AnswerId": 107791,
        "Answers": [{
          "Id": 107791,
          "Text": "PageSize"
        }, {
          "Id": 107792,
          "Text": "PageRows"
        }, {
          "Id": 107793,
          "Text": "PageRecords"
        }, {
          "Id": 107794,
          "Text": "PageField"
        }]
      }, {
        "Id": 26026,
        "Text": "Để thêm một trường mới cho một điều khiển GridView, bạn sử dụng phương pháp nào sau đây?A. Sử dụng hộp thoại FieldsB. Sử dụng hộp thoại Add FieldsC. Sử dụng hộp thoại Add Field",
        "Marks": 1,
        "AnswerId": 107795,
        "Answers": [{
          "Id": 107795,
          "Text": "B, C đúng"
        }, {
          "Id": 107796,
          "Text": "A, B đúng"
        }, {
          "Id": 107797,
          "Text": "A, C đúng"
        }, {
          "Id": 107798,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 26027,
        "Text": "Phát biểu nào sau đây ĐÚNG về FormView?",
        "Marks": 1,
        "AnswerId": 107802,
        "Answers": [{
          "Id": 107799,
          "Text": "Hiển thị dữ liệu dưới dạng danh sách các mẫu tin"
        }, {
          "Id": 107800,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 107801,
          "Text": "Không hỗ trợ thao tác thêm dữ liệu vào CSDL"
        }, {
          "Id": 107802,
          "Text": "Hỗ trợ sử dụng CSS để định dạng hiển thị dữ liệu"
        }]
      }, {
        "Id": 26028,
        "Text": "Thuộc tính nào sau đây của phần tử Asp:BoundField chỉ định chuỗi định dạng hiển thị dữ liệu cho một trường dữ liệu của GridView?",
        "Marks": 1,
        "AnswerId": 107806,
        "Answers": [{
          "Id": 107803,
          "Text": "FieldFormatString"
        }, {
          "Id": 107804,
          "Text": "ColumnFormatString"
        }, {
          "Id": 107805,
          "Text": "FieldFormat"
        }, {
          "Id": 107806,
          "Text": "DataFormatString"
        }]
      }, {
        "Id": 26029,
        "Text": "Lựa chọn phương án ĐÚNG.Sau khi liên kết một SqlDataSource với GridView, mặc định các trường tạo ra là ............",
        "Marks": 1,
        "AnswerId": 107809,
        "Answers": [{
          "Id": 107807,
          "Text": "Trường TemplateField"
        }, {
          "Id": 107808,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107809,
          "Text": "Trường BoundField"
        }, {
          "Id": 107810,
          "Text": "Trường BoundField hoặc trường TemplateField tùy theo kiểu dữ liệu của cột trong bảng CSDL"
        }]
      }, {
        "Id": 26030,
        "Text": "Lựa phương án án ĐÚNGĐể một điều khiển DetailsView hiển thị chế độ mặc định là chế độ Insert trên trình duyệt, lập trình viên phải ............",
        "Marks": 1,
        "AnswerId": 107812,
        "Answers": [{
          "Id": 107811,
          "Text": "Không phải thực hiện bất cứ một thao tác nào, DetailsView được hiển thị mặc định ở chế độ Insert"
        }, {
          "Id": 107812,
          "Text": "Gán giá trị cho thuộc tính DefaultMode bằng Insert"
        }, {
          "Id": 107813,
          "Text": "Gán giá trị cho thuộc tính Mode bằng Insert"
        }, {
          "Id": 107814,
          "Text": "Gán giá trị cho thuộc tính InsertMode bằng True"
        }]
      }, {
        "Id": 26031,
        "Text": "Phương pháp triển khai ứng dụng web nào sau đây không được hỗ trợ bởi phiên bản Visual Studio Express?",
        "Marks": 1,
        "AnswerId": 107817,
        "Answers": [{
          "Id": 107815,
          "Text": "Xcopy"
        }, {
          "Id": 107816,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107817,
          "Text": "Tạo Web Setup Project"
        }, {
          "Id": 107818,
          "Text": "Tiền biên dịch"
        }]
      }, {
        "Id": 26032,
        "Text": "Phát biểu nào sau đây là đúng khi đề cập đến ObjectDataSource?",
        "Marks": 1,
        "AnswerId": 107819,
        "Answers": [{
          "Id": 107819,
          "Text": "ObjectDataSource truy cập cơ sở dữ liệu trực tiếp mà không thông qua lớp truy cập dữ liệu."
        }, {
          "Id": 107820,
          "Text": "Trong các ứng dụng lớn, nên thiết kế theo kiến trúc ba tầng. Do đó, không nên sử dụng ObjectDataSource"
        }, {
          "Id": 107821,
          "Text": "Trong các ứng dụng nhỏ, sử dụng ObjectDataSource mang lại nhiều lợi ích, không phải viết code C#."
        }, {
          "Id": 107822,
          "Text": "ObjectDataSource cho phép bạn sử dụng phương pháp buộc dữ liệu cùng với kiến trúc 3 tầng trong ứng dụng cơ sở dữ liệu"
        }]
      }, {
        "Id": 26033,
        "Text": "Để Client có thể truy cập đến một website không nằm trong thư mục gốc (C:\\inetpub\\wwwroot) của web server, ta phải tạo và cấu hình ............ trong IISA. Một Web siteB. Một thư mục ảo",
        "Marks": 1,
        "AnswerId": 107823,
        "Answers": [{
          "Id": 107823,
          "Text": "B đúng"
        }, {
          "Id": 107824,
          "Text": "Cả A, B đều đúng"
        }, {
          "Id": 107825,
          "Text": "A đúng"
        }, {
          "Id": 107826,
          "Text": "Cả A, B đều sai"
        }]
      }, {
        "Id": 26034,
        "Text": "Điều khiển Object Data Source có thể được buộc vào điều khiển nào sau đây?A. List boxB. Check boxC. Radio buttonD. Drop-down list",
        "Marks": 1,
        "AnswerId": 107829,
        "Answers": [{
          "Id": 107827,
          "Text": "A, C đúng"
        }, {
          "Id": 107828,
          "Text": "B, C đúng"
        }, {
          "Id": 107829,
          "Text": "A, D đúng"
        }, {
          "Id": 107830,
          "Text": "A, B đúng"
        }]
      }, {
        "Id": 26035,
        "Text": "Phương pháp triển khai nào sau đây làm tăng hiệu năng của người dùng đầu tiên truy cập đến Website?",
        "Marks": 1,
        "AnswerId": 107832,
        "Answers": [{
          "Id": 107831,
          "Text": "Tạo Web Setup Project"
        }, {
          "Id": 107832,
          "Text": "Tiền biên dịch"
        }, {
          "Id": 107833,
          "Text": "Các phương án đều sai"
        }, {
          "Id": 107834,
          "Text": "Xcopy"
        }]
      }, {
        "Id": 26036,
        "Text": "Trong mô hình 3 tầng, các lớp nghiệp vụ của tầng trung gian được chứa trong thư mục nào của ứng dụng?",
        "Marks": 1,
        "AnswerId": 107838,
        "Answers": [{
          "Id": 107835,
          "Text": "Logic_Code"
        }, {
          "Id": 107836,
          "Text": "Application"
        }, {
          "Id": 107837,
          "Text": "Images"
        }, {
          "Id": 107838,
          "Text": "App_Code"
        }]
      }, {
        "Id": 26037,
        "Text": "Theo bạn, các bước tạo và cấu hình thư mục ảo trong IIS7 theo thứ tự nào sau đây là đúng?1.Tạo thư mục ảo trong IIS và chuyển thư mục ảo thành ứng dụng2. Cấu hình xác thực 3. Tạo Application Pool và gán Applicaton Pool cho ứng dụng4. Kích hoạt directory b",
        "Marks": 1,
        "AnswerId": 107840,
        "Answers": [{
          "Id": 107839,
          "Text": "3-\u003e2-\u003e1-\u003e5-\u003e4"
        }, {
          "Id": 107840,
          "Text": "1-\u003e2-\u003e3-\u003e4-\u003e5"
        }, {
          "Id": 107841,
          "Text": "2-\u003e1-\u003e3-\u003e5-\u003e4"
        }, {
          "Id": 107842,
          "Text": "1-\u003e2-\u003e3-\u003e5-\u003e4"
        }]
      }, {
        "Id": 26038,
        "Text": "Trong kiến trúc ba tầng, lớp nghiệp vụ thuộc tầng nào sau đây?",
        "Marks": 1,
        "AnswerId": 107843,
        "Answers": [{
          "Id": 107843,
          "Text": "Tầng trung gian"
        }, {
          "Id": 107844,
          "Text": "Tầng CSDL"
        }, {
          "Id": 107845,
          "Text": "Tầng trình bày"
        }, {
          "Id": 107846,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 26039,
        "Text": "Trong mô hình 3 tầng, tầng nào chứa các trang ASP.Net chịu trách nhiệm nhận thông tin từ người dùng và xuất kết quả đến người dùng?",
        "Marks": 1,
        "AnswerId": 107847,
        "Answers": [{
          "Id": 107847,
          "Text": "Tầng trình bày"
        }, {
          "Id": 107848,
          "Text": "Tầng trung gian"
        }, {
          "Id": 107849,
          "Text": "Tầng CSDL"
        }, {
          "Id": 107850,
          "Text": "Các phương án đều sai"
        }]
      }, {
        "Id": 26040,
        "Text": "Để liên kết với CSS từ một file bên ngoài, ta dùng khai báo nào?",
        "Marks": 1,
        "AnswerId": 107852,
        "Answers": [{
          "Id": 107851,
          "Text": "\u003clinked href=\"my_style_sheet.css\" media=\"screen\" rel=\"stylesheet\"  type=\"text/css\"  /\u003e"
        }, {
          "Id": 107852,
          "Text": "\u003clink href=\"my_style_sheet.css\" media=\"screen\" rel=\"stylesheet\"  type=\"text/css\"  /\u003e"
        }, {
          "Id": 107853,
          "Text": "\u003clink href=\"my_style_sheet.css\" media=\"screen\" type=\"text/css\"  /\u003e"
        }, {
          "Id": 107854,
          "Text": "Tất cả các phương án đều sai"
        }]
      }, {
        "Id": 26041,
        "Text": "Ý nghĩa của thuộc tính Display trong CSS?",
        "Marks": 1,
        "AnswerId": 107856,
        "Answers": [{
          "Id": 107855,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 107856,
          "Text": "Cho phép một thẻ cục bộ lấp đầy thẻ chứa nó"
        }, {
          "Id": 107857,
          "Text": "Không cho phép một thẻ cục bộ lấp đầy thẻ chứa nó"
        }, {
          "Id": 107858,
          "Text": "Tất cả các phương án đều sai"
        }]
      }, {
        "Id": 26042,
        "Text": "Margin trong cấu trúc Box định nghĩa điều gì?",
        "Marks": 1,
        "AnswerId": 107859,
        "Answers": [{
          "Id": 107859,
          "Text": "Định nghĩa lề cho box"
        }, {
          "Id": 107860,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 107861,
          "Text": "Định nghĩa khoảng đệm cho box"
        }, {
          "Id": 107862,
          "Text": "Định nghĩa đường viền cho Box"
        }]
      }, {
        "Id": 26043,
        "Text": "CSS là viết tắt của cụm từ nào?",
        "Marks": 1,
        "AnswerId": 107866,
        "Answers": [{
          "Id": 107863,
          "Text": "Cascading Style Sheet"
        }, {
          "Id": 107864,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 107865,
          "Text": "Cascaded Style Sheets"
        }, {
          "Id": 107866,
          "Text": "Cascading Style Sheets"
        }]
      }, {
        "Id": 26044,
        "Text": "Thuộc tính clear trong CSS dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 107870,
        "Answers": [{
          "Id": 107867,
          "Text": "Cho phép thẻ nổi"
        }, {
          "Id": 107868,
          "Text": "Không cho phép sửa trang web"
        }, {
          "Id": 107869,
          "Text": "Tất cả các đáp án đều sai"
        }, {
          "Id": 107870,
          "Text": "Không cho phép thẻ nổi"
        }]
      }, {
        "Id": 26045,
        "Text": "Giá trị static của thuộc tính position có ý nghĩa gì?",
        "Marks": 1,
        "AnswerId": 107872,
        "Answers": [{
          "Id": 107871,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 107872,
          "Text": "Đặt cố định các box để tránh chồng chéo giữa các box"
        }, {
          "Id": 107873,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 107874,
          "Text": "Định nghĩa phương thức tĩnh"
        }]
      }, {
        "Id": 26046,
        "Text": "Thuộc tính float trong CSS dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 107876,
        "Answers": [{
          "Id": 107875,
          "Text": "Dùng đề định nghĩa số thực"
        }, {
          "Id": 107876,
          "Text": "Dùng để nổi những thành phần (box, image, text, …) trên trang"
        }, {
          "Id": 107877,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 107878,
          "Text": "Dùng để thay đổi những thành phần (box, image, text, …) trên trang"
        }]
      }, {
        "Id": 26047,
        "Text": "Class trong CSS dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 107882,
        "Answers": [{
          "Id": 107879,
          "Text": "Định nghĩa lớp cho các giá trị của thuộc tính trong CSS"
        }, {
          "Id": 107880,
          "Text": "Định nghĩa một lớp trong lập trình hướng đối tượng"
        }, {
          "Id": 107881,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 107882,
          "Text": "Định nghĩa một kiểu định dạng cho nhiều thẻ có cùng class"
        }]
      }, {
        "Id": 26048,
        "Text": "Ý nghĩa của thuộc tính overflow trong CSS?",
        "Marks": 1,
        "AnswerId": 107883,
        "Answers": [{
          "Id": 107883,
          "Text": "Để tránh hiện tượng xô lệch các cột"
        }, {
          "Id": 107884,
          "Text": "Để tránh tràn số trong ASP.NET"
        }, {
          "Id": 107885,
          "Text": "Để đánh dấu cờ tràn trong ASP.NET"
        }, {
          "Id": 107886,
          "Text": "Tất cả các phương án đều đúng"
        }]
      }, {
        "Id": 26049,
        "Text": "Các giá trị nào là của thuộc tính Display trong CSS?",
        "Marks": 1,
        "AnswerId": 107888,
        "Answers": [{
          "Id": 107887,
          "Text": "online, block"
        }, {
          "Id": 107888,
          "Text": "inline, block"
        }, {
          "Id": 107889,
          "Text": "inline, online, block"
        }, {
          "Id": 107890,
          "Text": "Tất cả các phương án đều sai"
        }]
      }]
    },
    {
      "Id": "CLCO",
      "quiz": [{
        "Id": 24661,
        "Text": "Dịch vụ Amazon Elastic Compute Cloud có chức năng chính là gì?",
        "Marks": 1,
        "AnswerId": 102331,
        "Answers": [{
          "Id": 102331,
          "Text": "Hỗ trợ lưu trữ web"
        }, {
          "Id": 102332,
          "Text": "Hỗ trợ cập nhật dữ liệu"
        }, {
          "Id": 102333,
          "Text": "Hỗ trợ thay đổi kiến trúc mô hình cloud"
        }, {
          "Id": 102334,
          "Text": "Hỗ trợ truy xuất dữ liệu"
        }]
      }, {
        "Id": 24662,
        "Text": "Câu nào là đúng đối với UDDI?",
        "Marks": 1,
        "AnswerId": 102337,
        "Answers": [{
          "Id": 102335,
          "Text": "UDDI là cách viết khác của WSDL"
        }, {
          "Id": 102336,
          "Text": "UDDI tương tự như WSDL"
        }, {
          "Id": 102337,
          "Text": "UDDI cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web."
        }, {
          "Id": 102338,
          "Text": "UDDI không cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web, nó chỉ được thực hiện qua WSDL"
        }]
      }, {
        "Id": 24663,
        "Text": "Câu nào là đúng đối với WSDL?",
        "Marks": 1,
        "AnswerId": 102339,
        "Answers": [{
          "Id": 102339,
          "Text": "WSDL Cho phép các nhà phát triển ghi thông tin dịch vụ web"
        }, {
          "Id": 102340,
          "Text": "WSDL kết nối trực tiếp với cơ sở dữ liệu SQLite và trả về kết quả cho người dùng"
        }, {
          "Id": 102341,
          "Text": "WSDL là cầu nối giữa người sử dụng với Database"
        }, {
          "Id": 102342,
          "Text": "WSDL không cho phép các nhà phát triển ghi thông tin dịch vụ web"
        }]
      }, {
        "Id": 24664,
        "Text": "WSDL là viết tắt của cụm từ nào?",
        "Marks": 1,
        "AnswerId": 102345,
        "Answers": [{
          "Id": 102343,
          "Text": "Width Server Description Language"
        }, {
          "Id": 102344,
          "Text": "Width Services Description Language"
        }, {
          "Id": 102345,
          "Text": "Web Services Description Language"
        }, {
          "Id": 102346,
          "Text": "Web Server Description Language"
        }]
      }, {
        "Id": 24665,
        "Text": "API là viết tắt của cụm từ nào?",
        "Marks": 1,
        "AnswerId": 102349,
        "Answers": [{
          "Id": 102347,
          "Text": "Application Private Interface"
        }, {
          "Id": 102348,
          "Text": "Application Programming Internet"
        }, {
          "Id": 102349,
          "Text": "Application Programming Interface"
        }, {
          "Id": 102350,
          "Text": "Application Public Interface"
        }]
      }, {
        "Id": 24666,
        "Text": "Câu nào là đúng đối với API?",
        "Marks": 1,
        "AnswerId": 102351,
        "Answers": [{
          "Id": 102351,
          "Text": "API cho phép các chương trình sử dụng có thể giao tiếp với nhau mà không cần sự tham gia của người dùng"
        }, {
          "Id": 102352,
          "Text": "API bản chất là một webserver"
        }, {
          "Id": 102353,
          "Text": "Để giao tiếp các chương trình sử dụng API nhất thiết phải có sự tham gia của người dùng"
        }, {
          "Id": 102354,
          "Text": "API bản chất là một không gian lưu trữ web"
        }]
      }, {
        "Id": 24667,
        "Text": "Câu nào là đúng đối với SOAP?",
        "Marks": 1,
        "AnswerId": 102357,
        "Answers": [{
          "Id": 102355,
          "Text": "Sử dụng để mã hóa thông điệp HTML"
        }, {
          "Id": 102356,
          "Text": "Sử dụng để duy trì kết nối internet"
        }, {
          "Id": 102357,
          "Text": "Sử dụng để mã hóa thông điệp XML"
        }, {
          "Id": 102358,
          "Text": "Sử dụng để mã hóa CSS"
        }]
      }, {
        "Id": 24668,
        "Text": "Câu nào là đúng đối với API?",
        "Marks": 1,
        "AnswerId": 102362,
        "Answers": [{
          "Id": 102359,
          "Text": "API là một file thư viện dạng dll"
        }, {
          "Id": 102360,
          "Text": "API là một file thực thi dạng exe"
        }, {
          "Id": 102361,
          "Text": "API không cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ"
        }, {
          "Id": 102362,
          "Text": "API cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ"
        }]
      }, {
        "Id": 24669,
        "Text": "AJAX sử dụng công nghệ nào?",
        "Marks": 1,
        "AnswerId": 102364,
        "Answers": [{
          "Id": 102363,
          "Text": "Sử dụng các công nghệ GSM, CDMA, CSS"
        }, {
          "Id": 102364,
          "Text": "Sử dụng các công nghệ XHTML, CSS, JSON"
        }, {
          "Id": 102365,
          "Text": "Chỉ sử dụng duy nhất công nghệ CDMA"
        }, {
          "Id": 102366,
          "Text": "Sử dụng các công nghẹ XHTML, CMS, CRM, HTML, CSS"
        }]
      }, {
        "Id": 24670,
        "Text": "Bất lợi của AJAX là gì?",
        "Marks": 1,
        "AnswerId": 102370,
        "Answers": [{
          "Id": 102367,
          "Text": "Có thể hiển thị lịch sử truy cập nhưng tối đa hiển thị là 10 bản ghi"
        }, {
          "Id": 102368,
          "Text": "Phải sử dụng nhiều đoạn kịch bản PHP"
        }, {
          "Id": 102369,
          "Text": "Phải sử dụng nhiều doạn kịch bản JavaScript"
        }, {
          "Id": 102370,
          "Text": "Không hiển thị lịch sử truy cập"
        }]
      }, {
        "Id": 24671,
        "Text": "Dịch vụ nào được MobileMe cung cấp?",
        "Marks": 1,
        "AnswerId": 102372,
        "Answers": [{
          "Id": 102371,
          "Text": "post"
        }, {
          "Id": 102372,
          "Text": "push"
        }, {
          "Id": 102373,
          "Text": "move"
        }, {
          "Id": 102374,
          "Text": "Get"
        }]
      }, {
        "Id": 24672,
        "Text": "MobileMe là giải pháp của công ty nào?",
        "Marks": 1,
        "AnswerId": 102378,
        "Answers": [{
          "Id": 102375,
          "Text": "Microsoft"
        }, {
          "Id": 102376,
          "Text": "Google"
        }, {
          "Id": 102377,
          "Text": "IBM"
        }, {
          "Id": 102378,
          "Text": "Apple"
        }]
      }, {
        "Id": 24673,
        "Text": "Dịch vụ Live Mesh là của công ty nào?",
        "Marks": 1,
        "AnswerId": 102380,
        "Answers": [{
          "Id": 102379,
          "Text": "Yahoo"
        }, {
          "Id": 102380,
          "Text": "Microsoft"
        }, {
          "Id": 102381,
          "Text": "IBM"
        }, {
          "Id": 102382,
          "Text": "Apple"
        }]
      }, {
        "Id": 24674,
        "Text": "Điều nào sau đây đúng về Live Framework?",
        "Marks": 1,
        "AnswerId": 102384,
        "Answers": [{
          "Id": 102383,
          "Text": "Live Framework là một thư mục chia sẻ, tương tác với các thành phần trong hệ điều hành"
        }, {
          "Id": 102384,
          "Text": "Live Framework là một API cho phép truy cập các dịch vụ Live Mesh trên HTTP"
        }, {
          "Id": 102385,
          "Text": "Live Framework là một file"
        }, {
          "Id": 102386,
          "Text": "Live Framework là một hệ điều hành"
        }]
      }, {
        "Id": 24675,
        "Text": "SDN là viết tắt của cụm từ nào?",
        "Marks": 1,
        "AnswerId": 102390,
        "Answers": [{
          "Id": 102387,
          "Text": "Storage Develop Network"
        }, {
          "Id": 102388,
          "Text": "Small Delivery Network"
        }, {
          "Id": 102389,
          "Text": "Small Delivery Networking"
        }, {
          "Id": 102390,
          "Text": "Storage Delivery Network"
        }]
      }, {
        "Id": 24676,
        "Text": "Live Mesh có sẵn trong hệ điều hành nào?",
        "Marks": 1,
        "AnswerId": 102391,
        "Answers": [{
          "Id": 102391,
          "Text": "Có trong windows XP, windows Vista"
        }, {
          "Id": 102392,
          "Text": "Có trong MS-DOS"
        }, {
          "Id": 102393,
          "Text": "Có trong fedora"
        }, {
          "Id": 102394,
          "Text": "Có trong Ubuntu"
        }]
      }, {
        "Id": 24677,
        "Text": "Điều nào sau đây đúng về dịch vụ S3?",
        "Marks": 1,
        "AnswerId": 102396,
        "Answers": [{
          "Id": 102395,
          "Text": "Là dịch vụ hỗ trợ truy xuất dữ liệu trên cloud nhưng không hỗ trợ lưu trữ"
        }, {
          "Id": 102396,
          "Text": "Là dịch vụ lưu trữ trên cloud"
        }, {
          "Id": 102397,
          "Text": "Là dịch vụ hủy dữ liệu từ cloud"
        }, {
          "Id": 102398,
          "Text": "Là dịch vụ copy dữ liệu giữa 2 máy client"
        }]
      }, {
        "Id": 24678,
        "Text": "MobileMe iDisk dùng để quản lý điều gì?",
        "Marks": 1,
        "AnswerId": 102402,
        "Answers": [{
          "Id": 102399,
          "Text": "Quản lý thiết bị hỗ trợ bảo mật vân tay"
        }, {
          "Id": 102400,
          "Text": "Quản lý ổ đĩa cứng"
        }, {
          "Id": 102401,
          "Text": "Quản lý các ứng dụng"
        }, {
          "Id": 102402,
          "Text": "Quản lý tập tin hỗ trợ kéo thả"
        }]
      }, {
        "Id": 24679,
        "Text": "Dịch vụ S3 cung cấp cho khách hàng sử dụng giao thức nào?",
        "Marks": 1,
        "AnswerId": 102406,
        "Answers": [{
          "Id": 102403,
          "Text": "TCP"
        }, {
          "Id": 102404,
          "Text": "UDP"
        }, {
          "Id": 102405,
          "Text": "UDP, TCP, REST, SOAP"
        }, {
          "Id": 102406,
          "Text": "REST và SOAP"
        }]
      }, {
        "Id": 24680,
        "Text": "Hãy cho biết đâu là tính năng chính của dịch vụ S3?",
        "Marks": 1,
        "AnswerId": 102410,
        "Answers": [{
          "Id": 102407,
          "Text": "Ghi đọc xóa dữ liệu trên máy client"
        }, {
          "Id": 102408,
          "Text": "Chỉ hỗ trợ tính năng Xóa dữ liệu"
        }, {
          "Id": 102409,
          "Text": "Di chuyển dữ liệu"
        }, {
          "Id": 102410,
          "Text": "Ghi dữ liệu, đọc, xóa dữ liệu"
        }]
      }, {
        "Id": 24681,
        "Text": "Dịch vụ Office Live Small Business phù hợp với doanh nghiệp nào?",
        "Marks": 1,
        "AnswerId": 102411,
        "Answers": [{
          "Id": 102411,
          "Text": "Vừa và nhỏ"
        }, {
          "Id": 102412,
          "Text": "Vừa"
        }, {
          "Id": 102413,
          "Text": "Nhỏ"
        }, {
          "Id": 102414,
          "Text": "Lớn"
        }]
      }, {
        "Id": 24682,
        "Text": "SaaS bao gồm các loại dịch vụ nào?",
        "Marks": 1,
        "AnswerId": 102418,
        "Answers": [{
          "Id": 102415,
          "Text": "Business services và Customer-oriented services và soft services"
        }, {
          "Id": 102416,
          "Text": "Business service"
        }, {
          "Id": 102417,
          "Text": "Business services, Customer-oriented services, school services"
        }, {
          "Id": 102418,
          "Text": "Business services và Customer-oriented services"
        }]
      }, {
        "Id": 24683,
        "Text": "Đây không phải là một lợi thế của mô hình SaaS",
        "Marks": 1,
        "AnswerId": 102420,
        "Answers": [{
          "Id": 102419,
          "Text": "Dịch vụ SaaS cần ít chi phí nhất"
        }, {
          "Id": 102420,
          "Text": "Saas hoàn toàn có thể sử dụng mà không cần dùng Internet"
        }, {
          "Id": 102421,
          "Text": "SaaS hỗ trợ kiểm soát an toàn dữ liệu tốt"
        }, {
          "Id": 102422,
          "Text": "SaaS có khả năng áp dụng các chuẩn mực về CNTT cho tất cả các khách hàng sử dụng, do đó tính đồng nhất cao"
        }]
      }, {
        "Id": 24684,
        "Text": "Dịch vụ nào thuộc SaaS?",
        "Marks": 1,
        "AnswerId": 102425,
        "Answers": [{
          "Id": 102423,
          "Text": "Chỉ có Hotmail"
        }, {
          "Id": 102424,
          "Text": "Chỉ có Gmail"
        }, {
          "Id": 102425,
          "Text": "Gmail, Hotmail, Yahoo Mail"
        }, {
          "Id": 102426,
          "Text": "Gmail, Hotmail, Yahoo Mail, Book Mail"
        }]
      }, {
        "Id": 24685,
        "Text": "Lợi ích của ảo hóa là gì?",
        "Marks": 1,
        "AnswerId": 102427,
        "Answers": [{
          "Id": 102427,
          "Text": "Ảo hóa giúp bạn dễ dàng di chuyển đến một hệ thống SaaS"
        }, {
          "Id": 102428,
          "Text": "Ảo hóa giúp bạn dễ dàng sử dụng phần mềm mà không cần SaaS"
        }, {
          "Id": 102429,
          "Text": "Để ảo hóa sẽ cần 10 Server thật"
        }, {
          "Id": 102430,
          "Text": "Ảo hóa giúp bạn kết nối với SaaS mà không cần internet"
        }]
      }, {
        "Id": 24686,
        "Text": "Điều nào sau đây đúng về SaaS?",
        "Marks": 1,
        "AnswerId": 102432,
        "Answers": [{
          "Id": 102431,
          "Text": "Cần thiết phải quản lý cơ sở hạ tầng và nền tảng nó đang chạy"
        }, {
          "Id": 102432,
          "Text": "Không cần quản lý cơ sở hạ tầng và nền tảng nó đang chạy"
        }, {
          "Id": 102433,
          "Text": "Chỉ càn quản lý phần mềm đang chạy, không cần quản lý cơ sở hạ tầng"
        }, {
          "Id": 102434,
          "Text": "Chỉ cần quản lý có sở hạ tầng, không cần quản lý phần mềm đang chạy"
        }]
      }, {
        "Id": 24687,
        "Text": "Google Calendar thuộc nhóm dịch vụ nào?",
        "Marks": 1,
        "AnswerId": 102438,
        "Answers": [{
          "Id": 102435,
          "Text": "Google Apps Calendar Edition"
        }, {
          "Id": 102436,
          "Text": "Google Apps Premier Edition"
        }, {
          "Id": 102437,
          "Text": "Google Apps Premier Calendar"
        }, {
          "Id": 102438,
          "Text": "Google Apps"
        }]
      }, {
        "Id": 24688,
        "Text": "Google Apps Premier Edition hỗ trợ cho mỗi user miễn phí bao nhiêu GB?",
        "Marks": 1,
        "AnswerId": 102439,
        "Answers": [{
          "Id": 102439,
          "Text": "10GB"
        }, {
          "Id": 102440,
          "Text": "5GB"
        }, {
          "Id": 102441,
          "Text": "20GB"
        }, {
          "Id": 102442,
          "Text": "100GB"
        }]
      }, {
        "Id": 24689,
        "Text": "SaaS là gì?",
        "Marks": 1,
        "AnswerId": 102445,
        "Answers": [{
          "Id": 102443,
          "Text": "Là một ứng dụng trên Linux client"
        }, {
          "Id": 102444,
          "Text": "Là một dịch vụ lưu trữ trên một máy client"
        }, {
          "Id": 102445,
          "Text": "Là một ứng dụng lưu trữ trên một máy chủ từ xa và truy cập thông qua Internet"
        }, {
          "Id": 102446,
          "Text": "Là một ứng dụng được lưu trữ trên Server Localhost"
        }]
      }, {
        "Id": 24690,
        "Text": "Đâu là dịch vụ SaaS của Google?",
        "Marks": 1,
        "AnswerId": 102450,
        "Answers": [{
          "Id": 102447,
          "Text": "Google Apps Google Apps Premier Edition, Google List, Google Collection"
        }, {
          "Id": 102448,
          "Text": "Google Apps Google Apps Premier Edition và Google List"
        }, {
          "Id": 102449,
          "Text": "Google Apps và Google Apps Mobile Collection"
        }, {
          "Id": 102450,
          "Text": "Google Apps và Google Apps Premier Edition"
        }]
      }, {
        "Id": 24691,
        "Text": "Nhược điểm của Google App Engine?",
        "Marks": 1,
        "AnswerId": 102452,
        "Answers": [{
          "Id": 102451,
          "Text": "Không hỗ trợ Python"
        }, {
          "Id": 102452,
          "Text": "Không hỗ trợ tốt về AJAX"
        }, {
          "Id": 102453,
          "Text": "Không hỗ trợ tốt về HTML"
        }, {
          "Id": 102454,
          "Text": "Không hỗ trợ tốt về XML"
        }]
      }, {
        "Id": 24692,
        "Text": "Google Gears làm việc với trình duyệt nào?",
        "Marks": 1,
        "AnswerId": 102456,
        "Answers": [{
          "Id": 102455,
          "Text": "Safari"
        }, {
          "Id": 102456,
          "Text": "Chrome, firefox, safari"
        }, {
          "Id": 102457,
          "Text": "Chrome"
        }, {
          "Id": 102458,
          "Text": "Firefox"
        }]
      }, {
        "Id": 24693,
        "Text": "Live Services là dịch vụ của thành phần nào sau đây?",
        "Marks": 1,
        "AnswerId": 102460,
        "Answers": [{
          "Id": 102459,
          "Text": "Google Platform"
        }, {
          "Id": 102460,
          "Text": "Azure Platform"
        }, {
          "Id": 102461,
          "Text": "Window Plathform"
        }, {
          "Id": 102462,
          "Text": "Apple Plathform"
        }]
      }, {
        "Id": 24694,
        "Text": "Điều nào sau đây đúng về Bungee Connect?",
        "Marks": 1,
        "AnswerId": 102465,
        "Answers": [{
          "Id": 102463,
          "Text": "Tích hợp tự động các ứng dụng truyền thống chạy trên máy client"
        }, {
          "Id": 102464,
          "Text": "Tích hợp tự động các dịch vụ web (SOAP / REST) ​​và cơ sở dữ liệu (Oracle, ASP.NET)"
        }, {
          "Id": 102465,
          "Text": "Tích hợp tự động các dịch vụ web (SOAP / REST) ​​và cơ sở dữ liệu (MySQL / PostgreSQL)"
        }, {
          "Id": 102466,
          "Text": "Không tích hợp dịch vụ nào"
        }]
      }, {
        "Id": 24695,
        "Text": "Azure cho phép các nhà phát triển sử dụng framework nào?",
        "Marks": 1,
        "AnswerId": 102467,
        "Answers": [{
          "Id": 102467,
          "Text": ".NET framework"
        }, {
          "Id": 102468,
          "Text": "Google Framework"
        }, {
          "Id": 102469,
          "Text": "Java Framework"
        }, {
          "Id": 102470,
          "Text": "IBM framework"
        }]
      }, {
        "Id": 24696,
        "Text": "Google Gears hỗ trợ tạo các ứng dụng loại nào?",
        "Marks": 1,
        "AnswerId": 102474,
        "Answers": [{
          "Id": 102471,
          "Text": "web online"
        }, {
          "Id": 102472,
          "Text": "linux application"
        }, {
          "Id": 102473,
          "Text": "window application"
        }, {
          "Id": 102474,
          "Text": "web offline"
        }]
      }, {
        "Id": 24697,
        "Text": "Điều nào sau đây đúng về Microsoft SQL Services?",
        "Marks": 1,
        "AnswerId": 102475,
        "Answers": [{
          "Id": 102475,
          "Text": "Có thể lưu trữ và lấy dữ liệu có cấu trúc và không có cấu trúc"
        }, {
          "Id": 102476,
          "Text": "Có thể lưu trữ và lấy dữ liệu có cấu trúc"
        }, {
          "Id": 102477,
          "Text": "Có thể lưu trữ và lấy dữ liệu không có cấu trúc"
        }, {
          "Id": 102478,
          "Text": "Không thể lưu trữ dữ liệu"
        }]
      }, {
        "Id": 24698,
        "Text": "Công cụ nào của Google cho phép tạo ứng dụng trên Cloud?",
        "Marks": 1,
        "AnswerId": 102482,
        "Answers": [{
          "Id": 102479,
          "Text": "Google Application Engine"
        }, {
          "Id": 102480,
          "Text": "Google Calendar"
        }, {
          "Id": 102481,
          "Text": "Gmail"
        }, {
          "Id": 102482,
          "Text": "Google App Engine"
        }]
      }, {
        "Id": 24699,
        "Text": "Điều nào sau đây đúng cho Intuit QuickBase ?",
        "Marks": 1,
        "AnswerId": 102485,
        "Answers": [{
          "Id": 102483,
          "Text": "Cho phép các thành viên sử dụng chuyên môn để tạo ra các ứng dụng phục vụ cho những người có chuyên môn kỹ thuật"
        }, {
          "Id": 102484,
          "Text": "Cho phép các thành viên có chuyên môn tạo nên ứng dụng để phục vụ chính họ"
        }, {
          "Id": 102485,
          "Text": "Cho phép các thành viên để tạo ra các ứng dụng phục vụ cho những người không có chuyên môn kỹ thuật"
        }, {
          "Id": 102486,
          "Text": "Cho phép các thành viên không có chuyên môn tạo nên ứng dụng"
        }]
      }, {
        "Id": 24700,
        "Text": "Ngôn ngữ lập trình phổ biến trên đám mây của google là?",
        "Marks": 1,
        "AnswerId": 102487,
        "Answers": [{
          "Id": 102487,
          "Text": "Java"
        }, {
          "Id": 102488,
          "Text": "ASP"
        }, {
          "Id": 102489,
          "Text": "C#"
        }, {
          "Id": 102490,
          "Text": "VB.NET"
        }]
      }, {
        "Id": 24701,
        "Text": "Điều nào sau đây đúng về Ảo hóa?",
        "Marks": 1,
        "AnswerId": 102494,
        "Answers": [{
          "Id": 102491,
          "Text": "Chia máy chủ vật lý thành 1 máy chủ ảo"
        }, {
          "Id": 102492,
          "Text": "Chia máy chủ ảo thành nhiều máy chủ vật lý"
        }, {
          "Id": 102493,
          "Text": "Chia máy chủ áo thành 1 máy chủ vật lý"
        }, {
          "Id": 102494,
          "Text": "Chia máy chủ vật lý thành nhiều máy chủ ảo"
        }]
      }, {
        "Id": 24702,
        "Text": "BlueMix là gì?",
        "Marks": 1,
        "AnswerId": 102495,
        "Answers": [{
          "Id": 102495,
          "Text": "Một nền tảng để chạy bất cứ ứng dụng nào trong các đám mây mà không cần phải lo lắng về phần cứng, phần mềm và mạng"
        }, {
          "Id": 102496,
          "Text": "Là một thành phần của Microsoft Azure, cho phép tải các ứng dụng lên đám mây của Microsoft"
        }, {
          "Id": 102497,
          "Text": "Do Amazon phát triển"
        }, {
          "Id": 102498,
          "Text": "Do google phát triển"
        }]
      }, {
        "Id": 24703,
        "Text": "Đâu là đặc điểm của ảo hóa?",
        "Marks": 1,
        "AnswerId": 102500,
        "Answers": [{
          "Id": 102499,
          "Text": "Tốn thời gian hơn việc cài đặt trên máy chủ vật lý"
        }, {
          "Id": 102500,
          "Text": "Triển khai nhanh"
        }, {
          "Id": 102501,
          "Text": "Tốn chi phí"
        }, {
          "Id": 102502,
          "Text": "Triển khai chậm"
        }]
      }, {
        "Id": 24704,
        "Text": "Điều nào sau đây đúng về máy ảo?",
        "Marks": 1,
        "AnswerId": 102506,
        "Answers": [{
          "Id": 102503,
          "Text": "Là ổ đĩa DVD-CD"
        }, {
          "Id": 102504,
          "Text": "Là một hệ điều hành trên ổ đĩa"
        }, {
          "Id": 102505,
          "Text": "Là ổ đĩa cứng"
        }, {
          "Id": 102506,
          "Text": "Là một tập tin trên ổ đĩa"
        }]
      }, {
        "Id": 24705,
        "Text": "BlueMix thuộc loại nào trong các loại sau?",
        "Marks": 1,
        "AnswerId": 102509,
        "Answers": [{
          "Id": 102507,
          "Text": "SaaS"
        }, {
          "Id": 102508,
          "Text": "RaaS"
        }, {
          "Id": 102509,
          "Text": "PaaS"
        }, {
          "Id": 102510,
          "Text": "DaaS"
        }]
      }, {
        "Id": 24706,
        "Text": "Điểm khác biệt giữa Cloud VPS và VPS truyền thống ?",
        "Marks": 1,
        "AnswerId": 102513,
        "Answers": [{
          "Id": 102511,
          "Text": "Ảo hóa VPS trên một server thay vì một cụm server duy nhất"
        }, {
          "Id": 102512,
          "Text": "Ảo hóa VPS chỉ thực hiện trên 1 server"
        }, {
          "Id": 102513,
          "Text": "Ảo hóa VPS trên một cụm server thay vì một server duy nhất"
        }, {
          "Id": 102514,
          "Text": "Ảo hóa VPS chỉ thực hiện trên nhiều máy client"
        }]
      }, {
        "Id": 24707,
        "Text": "Meetup ảo là khái niệm của thành phần nào trong các thành phần sau?",
        "Marks": 1,
        "AnswerId": 102515,
        "Answers": [{
          "Id": 102515,
          "Text": "Bluemix"
        }, {
          "Id": 102516,
          "Text": "Azure"
        }, {
          "Id": 102517,
          "Text": "Bluemix, Azure"
        }, {
          "Id": 102518,
          "Text": "Google Site"
        }]
      }, {
        "Id": 24708,
        "Text": "Có thể tạo loại ứng dụng nào trên BlueMix?",
        "Marks": 1,
        "AnswerId": 102522,
        "Answers": [{
          "Id": 102519,
          "Text": "Ứng dụng web"
        }, {
          "Id": 102520,
          "Text": "Không cho phép tạo ứng dụng của riêng bạn mà chỉ cho phép bạn sử dụng"
        }, {
          "Id": 102521,
          "Text": "ứng dụng mobile"
        }, {
          "Id": 102522,
          "Text": "Cả ứng dụng web, mobile"
        }]
      }, {
        "Id": 24709,
        "Text": "DevOps Services là dịch vụ của thành phần nào trong các thành phần sau?",
        "Marks": 1,
        "AnswerId": 102525,
        "Answers": [{
          "Id": 102523,
          "Text": "Apple site"
        }, {
          "Id": 102524,
          "Text": "Google Site"
        }, {
          "Id": 102525,
          "Text": "Bluemix"
        }, {
          "Id": 102526,
          "Text": "Microsoft Azure"
        }]
      }, {
        "Id": 24710,
        "Text": "Hệ thống nào sau đây không tương đồng với hệ thống BlueMix",
        "Marks": 1,
        "AnswerId": 102530,
        "Answers": [{
          "Id": 102527,
          "Text": "Heroku"
        }, {
          "Id": 102528,
          "Text": "OpenShift"
        }, {
          "Id": 102529,
          "Text": "Google Cloud Environment"
        }, {
          "Id": 102530,
          "Text": "Microsoft Dynamics CRM"
        }]
      }]
    },
    {
      "Id": "DBAV",
      "quiz": [{
        "Id": 24956,
        "Text": "Chọn phát biểu đúng về SQL Server A. Là hệ quản trị nội dung cho phép đồng thời một lúc có nhiều người dùng truy xuất đến dữ liệu. B. SQL Server sử dụng điển hình trong các hệ thống nhỏ đến trung bình chạy trên một hoặc nhiều máy chủ Windows C. Là hệ quản",
        "Marks": 1,
        "AnswerId": 103506,
        "Answers": [{
          "Id": 103503,
          "Text": "B,D Đúng"
        }, {
          "Id": 103504,
          "Text": "D Đúng"
        }, {
          "Id": 103505,
          "Text": "A,B Đúng"
        }, {
          "Id": 103506,
          "Text": "C, B Đúng"
        }]
      }, {
        "Id": 24957,
        "Text": "SQL sử dụng ngôn ngữ nào sau đây để truy vấn CSDL: A. SQL B. PL-SQL C. Transact-SQL",
        "Marks": 1,
        "AnswerId": 103508,
        "Answers": [{
          "Id": 103507,
          "Text": "B Đúng"
        }, {
          "Id": 103508,
          "Text": "C Đúng"
        }, {
          "Id": 103509,
          "Text": "Cả A, B, C đều sai"
        }, {
          "Id": 103510,
          "Text": "A Đúng"
        }]
      }, {
        "Id": 24958,
        "Text": "Câu lệnh nào sau đây là câu lệnh điều khiển dữ liệu (DCL) A DENY B CREATE C GRANT D REVOKE",
        "Marks": 1,
        "AnswerId": 103511,
        "Answers": [{
          "Id": 103511,
          "Text": "A, C, D đúng"
        }, {
          "Id": 103512,
          "Text": "B, C , D đúng"
        }, {
          "Id": 103513,
          "Text": "A, B , Dđúng"
        }, {
          "Id": 103514,
          "Text": "A, B, C đúng"
        }]
      }, {
        "Id": 24959,
        "Text": "Để khởi động và dừng SQL Server sử dụng công cụ nào dưới đây:",
        "Marks": 1,
        "AnswerId": 103518,
        "Answers": [{
          "Id": 103515,
          "Text": "SQL Server Start/Stop Manager"
        }, {
          "Id": 103516,
          "Text": "SQL Server Configuration Management"
        }, {
          "Id": 103517,
          "Text": "SQL Server Management Studio"
        }, {
          "Id": 103518,
          "Text": "SQL Server Configuration Manager"
        }]
      }, {
        "Id": 24960,
        "Text": "Các ứng dụng nào sau đây có thể truy cập tới hệ quản trị CSDL SQL Server",
        "Marks": 1,
        "AnswerId": 103520,
        "Answers": [{
          "Id": 103519,
          "Text": "Ứng dụng .NET"
        }, {
          "Id": 103520,
          "Text": "Tất cả đáp án đều đúng"
        }, {
          "Id": 103521,
          "Text": "Ứng dụng Java"
        }, {
          "Id": 103522,
          "Text": "Ứng dụng Visual Basic 6"
        }]
      }, {
        "Id": 24961,
        "Text": "Phát biểu nào sau đây ĐÚNG về T-SQL?",
        "Marks": 1,
        "AnswerId": 103524,
        "Answers": [{
          "Id": 103523,
          "Text": "Có thể sử dụng T-SQL để thao tác trên mọi hệ quản trị CSDL quan hệ"
        }, {
          "Id": 103524,
          "Text": "T-SQL là ngôn ngữ mở rộng của SQL chuẩn, cung cấp thêm các tính năng lập trình"
        }, {
          "Id": 103525,
          "Text": "T-SQL là tên gọi khác của ngôn ngữ SQL"
        }, {
          "Id": 103526,
          "Text": "Tất cả các đáp án đều sai"
        }]
      }, {
        "Id": 24962,
        "Text": "Nếu quá trình thực thi một câu lệnh SQL xảy ra lỗi cú pháp. SQL Server sẽ thông báo lỗi đó bằng cách",
        "Marks": 1,
        "AnswerId": 103529,
        "Answers": [{
          "Id": 103527,
          "Text": "Hiển thị đường màu xanh lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Message"
        }, {
          "Id": 103528,
          "Text": "Hiển thị đường màu xanh lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Systax Error"
        }, {
          "Id": 103529,
          "Text": "Hiển thị đường màu đỏ lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Message"
        }, {
          "Id": 103530,
          "Text": "Hiển thị đường màu đỏ lượn sóng gạch chân phần câu lệnh nhập sai và hiển thị một thông báo lỗi trong Tab Systax Error"
        }]
      }, {
        "Id": 24963,
        "Text": "Các lỗi cú pháp nào sau đây thường gặp khi thực thi câu lệnh SQL A. Quên hoặc lựa chọn sai CSDL B. Viết sai tên bảng hoặc tên cột C. Viết sai từ khóa D. Bỏ sót dấu đóng ngoặc với một chuỗi ký tự.",
        "Marks": 1,
        "AnswerId": 103532,
        "Answers": [{
          "Id": 103531,
          "Text": "B, C , D Đúng"
        }, {
          "Id": 103532,
          "Text": "Cả A, B, C, D đều đúng"
        }, {
          "Id": 103533,
          "Text": "A, D Đúng"
        }, {
          "Id": 103534,
          "Text": "A, B, C Đúng"
        }]
      }, {
        "Id": 24964,
        "Text": "Thao tác nào sau đây có thể thực hiện trên lược đồ CSDL?",
        "Marks": 1,
        "AnswerId": 103537,
        "Answers": [{
          "Id": 103535,
          "Text": "Định nghĩa độ rộng của cột"
        }, {
          "Id": 103536,
          "Text": "Tất cả đáp án đều đúng"
        }, {
          "Id": 103537,
          "Text": "Thêm cột"
        }, {
          "Id": 103538,
          "Text": "Thêm dữ liệu cho một bảng CSDL"
        }]
      }, {
        "Id": 24965,
        "Text": "Khi kết nối tới CSDL SQL Server, tại hộp thoại Connect to Server của SQL Management Studio, chế độ xác thực nào sau đây người dùng phải nhập User Name và Password",
        "Marks": 1,
        "AnswerId": 103540,
        "Answers": [{
          "Id": 103539,
          "Text": "Windows Authentication"
        }, {
          "Id": 103540,
          "Text": "SQL Server Authentication"
        }, {
          "Id": 103541,
          "Text": "Windows Authentication và SQL Server Authentication"
        }, {
          "Id": 103542,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 24966,
        "Text": "Nên sử dụng kiểu dữ liệu nào sau đây để lưu chuỗi với độ dài cố định hỗ trợ UNICODE",
        "Marks": 1,
        "AnswerId": 103545,
        "Answers": [{
          "Id": 103543,
          "Text": "Varchar"
        }, {
          "Id": 103544,
          "Text": "Char"
        }, {
          "Id": 103545,
          "Text": "Nchar"
        }, {
          "Id": 103546,
          "Text": "Nvarchar"
        }]
      }, {
        "Id": 24967,
        "Text": "Đâu là chú thích sử dụng trong T-SQL",
        "Marks": 1,
        "AnswerId": 103548,
        "Answers": [{
          "Id": 103547,
          "Text": "*/ Chú thích dung */"
        }, {
          "Id": 103548,
          "Text": "--Chú thích đúng"
        }, {
          "Id": 103549,
          "Text": "/* Chú thích đúng /*"
        }, {
          "Id": 103550,
          "Text": "//Chú thích đúng"
        }]
      }, {
        "Id": 24968,
        "Text": "Lựa chọn nào sau đây không phải là kiểu dữ liệu của SQL Server:",
        "Marks": 1,
        "AnswerId": 103554,
        "Answers": [{
          "Id": 103551,
          "Text": "datetime2"
        }, {
          "Id": 103552,
          "Text": "datetime"
        }, {
          "Id": 103553,
          "Text": "numeric"
        }, {
          "Id": 103554,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 24969,
        "Text": "Có đoạn mã sau đây. DECLARE @a int, @b nchar(50) Đâu là câu lệnh gán giá trị cho @a và @b không gây lỗi định dạng dữ liệu",
        "Marks": 1,
        "AnswerId": 103557,
        "Answers": [{
          "Id": 103555,
          "Text": "SELECT @a = 1, @b = \u0027kí tự Unicode\u0027"
        }, {
          "Id": 103556,
          "Text": "SET @a = 1, @b = \u0027kí tự Unicode\u0027"
        }, {
          "Id": 103557,
          "Text": "SET @a = 1, @b = N\u0027kí tự Unicode\u0027"
        }, {
          "Id": 103558,
          "Text": "SELECT @a = 1, @b = N\u0027kí tự Unicode\u0027"
        }]
      }, {
        "Id": 24970,
        "Text": "Để chỉnh sửa thuộc tính của các cột trong bảng sử dụng Management Studio, Click chuột phải vào tên bảng và chọn _______",
        "Marks": 1,
        "AnswerId": 103561,
        "Answers": [{
          "Id": 103559,
          "Text": "Column Modify"
        }, {
          "Id": 103560,
          "Text": "Column Designer"
        }, {
          "Id": 103561,
          "Text": "Design"
        }, {
          "Id": 103562,
          "Text": "Table Design"
        }]
      }, {
        "Id": 24971,
        "Text": "Khi làm việc với hệ thống đa ngôn ngữ, kiểu dữ liệu nào sau đây thường được dùng để lưu trữ chuỗi",
        "Marks": 1,
        "AnswerId": 103564,
        "Answers": [{
          "Id": 103563,
          "Text": "Char hoặc Varchar"
        }, {
          "Id": 103564,
          "Text": "Nchar hoặc Nvarchar"
        }, {
          "Id": 103565,
          "Text": "Varchar hoặc Nvarchar"
        }, {
          "Id": 103566,
          "Text": "Char hoặc Nchar"
        }]
      }, {
        "Id": 24972,
        "Text": "Phát biểu nào sau đây đúng về biến bảng",
        "Marks": 1,
        "AnswerId": 103567,
        "Answers": [{
          "Id": 103567,
          "Text": "Có thể sử dụng câu lệnh UPDATE với biến bảng"
        }, {
          "Id": 103568,
          "Text": "Không thể sử dụng câu lệnh UPDATE và INSERT với biến bảng"
        }, {
          "Id": 103569,
          "Text": "Có thể sử dụng câu lệnh mọi câu lệnh INSERT, UPDATE, DELETE… với biến bảng"
        }, {
          "Id": 103570,
          "Text": "Có thể sử dụng câu lệnh SELECT INTO với biến bảng"
        }]
      }, {
        "Id": 24973,
        "Text": "SQL Server cung cấp bao nhiêu kiểu dữ liệu đơn",
        "Marks": 1,
        "AnswerId": 103572,
        "Answers": [{
          "Id": 103571,
          "Text": "25"
        }, {
          "Id": 103572,
          "Text": "26"
        }, {
          "Id": 103573,
          "Text": "30"
        }, {
          "Id": 103574,
          "Text": "20"
        }]
      }, {
        "Id": 24974,
        "Text": "Để gán giá trị cho một biến bảng. Sử dụng câu lệnh nào sau đây",
        "Marks": 1,
        "AnswerId": 103576,
        "Answers": [{
          "Id": 103575,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103576,
          "Text": "INSERT"
        }, {
          "Id": 103577,
          "Text": "SET"
        }, {
          "Id": 103578,
          "Text": "SELECT INTO"
        }]
      }, {
        "Id": 24975,
        "Text": "T- SQL hỗ trợ các loại biến nào sau đây:",
        "Marks": 1,
        "AnswerId": 103582,
        "Answers": [{
          "Id": 103579,
          "Text": "Biến vô hướng"
        }, {
          "Id": 103580,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103581,
          "Text": "Biến bảng"
        }, {
          "Id": 103582,
          "Text": "Biến vô hướng và biến bảng"
        }]
      }, {
        "Id": 24976,
        "Text": "Giả sử biến @String được khai báo như sau DECLARE @String varchar.Mã kịch bản sau trả về kết quả là SET @String = \u0027SQL Server 2008\u0027 SELECT LEN(@String)",
        "Marks": 1,
        "AnswerId": 103586,
        "Answers": [{
          "Id": 103583,
          "Text": "15"
        }, {
          "Id": 103584,
          "Text": "13"
        }, {
          "Id": 103585,
          "Text": "Lỗi"
        }, {
          "Id": 103586,
          "Text": "1"
        }]
      }, {
        "Id": 24977,
        "Text": "Cột InvoiceDate có kiểu dữ liệu SmallDatetime. Hàm CONVERT(varchar, InvoiceDate, a) trả lại kết quả cột InvoiceDate có định dạng dd-mm-yyyy. Vậy a có giá trị là bao nhiêu?",
        "Marks": 1,
        "AnswerId": 103590,
        "Answers": [{
          "Id": 103587,
          "Text": "107"
        }, {
          "Id": 103588,
          "Text": "101"
        }, {
          "Id": 103589,
          "Text": "103"
        }, {
          "Id": 103590,
          "Text": "105"
        }]
      }, {
        "Id": 24978,
        "Text": "Biểu thức sau đây thực hiện phép nhân giữa dữ liệu lưu trong cột InvoiceTotal của bảng Invoices: InvoiceTotal * .0775. Nếu cột InvoiceTotal có kiểu money thì SQL sẽ thực hiện phép chuyển đổi ngầm nào sau đây:",
        "Marks": 1,
        "AnswerId": 103593,
        "Answers": [{
          "Id": 103591,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103592,
          "Text": "Không thực hiện chuyển đổi ngầm"
        }, {
          "Id": 103593,
          "Text": "InvoiceTotal kiểu money bị chuyển thành kiểu Decimal"
        }, {
          "Id": 103594,
          "Text": "Giá trị .0775 kiểu Decimal bị chuyển thành kiểu money"
        }]
      }, {
        "Id": 24979,
        "Text": "Lệnh gán giá trị cho cột PaymentDate có kiểu SmallDatetime sau đây có thực hiện phép chuyển đổi ngầm không PaymentDate = \u00272008-08-05\u0027",
        "Marks": 1,
        "AnswerId": 103597,
        "Answers": [{
          "Id": 103595,
          "Text": "Không thực hiện chuyển đổi ngầm"
        }, {
          "Id": 103596,
          "Text": "Thực hiện phép chuyển đổi ngầm, giá trị chuỗi 2008-08-05 sẽ bị chuyển thành kiểu Datetime"
        }, {
          "Id": 103597,
          "Text": "Thực hiện phép chuyển đổi ngầm, giá trị chuỗi 2008-08-05 sẽ bị chuyển thành kiểu SmallDatetime"
        }, {
          "Id": 103598,
          "Text": "Thực hiện phép chuyển đổi ngầm, PaymentDate sẽ bị chuyển thành kiểu varchar"
        }]
      }, {
        "Id": 24980,
        "Text": "Cột InvoiceDate có kiểu dữ liệu SmallDatetime. Hàm CONVERT(varchar, InvoiceDate, 1) trả lại kết quả cột InvoiceDate có định dạng nào sau đây.",
        "Marks": 1,
        "AnswerId": 103601,
        "Answers": [{
          "Id": 103599,
          "Text": "dd/mm/yyyy"
        }, {
          "Id": 103600,
          "Text": "yy/dd/mm"
        }, {
          "Id": 103601,
          "Text": "mm/dd/yy"
        }, {
          "Id": 103602,
          "Text": "mm/dd/yyyy"
        }]
      }, {
        "Id": 24981,
        "Text": "Đoạn mã kịch bản nào sau đây thực hiện khai báo một biến và gán giá trị cho biến đó bằng 1 A. DECLARE @a int = 1 B. DECLARE @a int SET @a = 1 C. DECLARE @a int SELECT @a = 1 D. DECLARE a int SET a = 1",
        "Marks": 1,
        "AnswerId": 103603,
        "Answers": [{
          "Id": 103603,
          "Text": "Chỉ A, B, C đúng"
        }, {
          "Id": 103604,
          "Text": "Chỉ B đúng"
        }, {
          "Id": 103605,
          "Text": "Cả A, B, C , D đều đúng"
        }, {
          "Id": 103606,
          "Text": "Chỉ D đúng"
        }]
      }, {
        "Id": 24982,
        "Text": "Câu lệnh SELECT DATEDIFF(month, \u00272008-09-30\u0027, \u00272007-12-01\u0027) sau đây trả về kết quả là:",
        "Marks": 1,
        "AnswerId": 103609,
        "Answers": [{
          "Id": 103607,
          "Text": "9"
        }, {
          "Id": 103608,
          "Text": "304"
        }, {
          "Id": 103609,
          "Text": "-9"
        }, {
          "Id": 103610,
          "Text": "-304"
        }]
      }, {
        "Id": 24983,
        "Text": "Cột StartDate của bảng DateSample có kiểu dữ liệu datetime. Câu lệnh SELECT nào sau đây trả về tất cả các cột của bảng DateSample có StartDate là ngày 28-02-2012 A. SELECT * FROM DateSample WHERE StartDate = \u00272012-02-28\u0027 B. SELECT * FROM DateSample WHERE ",
        "Marks": 1,
        "AnswerId": 103612,
        "Answers": [{
          "Id": 103611,
          "Text": "B, C đúng"
        }, {
          "Id": 103612,
          "Text": "B, C, D đúng"
        }, {
          "Id": 103613,
          "Text": "B đúng"
        }, {
          "Id": 103614,
          "Text": "Cả A, B, C, D đều đúng"
        }]
      }, {
        "Id": 24984,
        "Text": "Cột InvoiceDate có kiểu dữ liệu SmallDatetime. Hàm CONVERT(varchar, InvoiceDate, a) trả lại kết quả cột InvoiceDate có định dạng dd/mm/yy. Vậy a có giá trị là bao nhiêu?",
        "Marks": 1,
        "AnswerId": 103617,
        "Answers": [{
          "Id": 103615,
          "Text": "101"
        }, {
          "Id": 103616,
          "Text": "2"
        }, {
          "Id": 103617,
          "Text": "3"
        }, {
          "Id": 103618,
          "Text": "7"
        }]
      }, {
        "Id": 24985,
        "Text": "Câu lệnh SELECT CHARINDEX(\u0027SQL\u0027, \u0027HELLO SQL Server\u0027) trả về kết quả là",
        "Marks": 1,
        "AnswerId": 103622,
        "Answers": [{
          "Id": 103619,
          "Text": "6"
        }, {
          "Id": 103620,
          "Text": "TRUE"
        }, {
          "Id": 103621,
          "Text": "3"
        }, {
          "Id": 103622,
          "Text": "7"
        }]
      }, {
        "Id": 24986,
        "Text": "Để câu lệnh ROLLBACK TRAN quay lui giao dịch đến điểm lưu trữ xác định, thực hiện như sau",
        "Marks": 1,
        "AnswerId": 103623,
        "Answers": [{
          "Id": 103623,
          "Text": "Viết câu lệnh ROLLBACK TRAN kèm theo tên điểm lưu trữ"
        }, {
          "Id": 103624,
          "Text": "Tạo điểm lưu trữ sử dụng câu lệnh SAVE AS"
        }, {
          "Id": 103625,
          "Text": "Tạo điểm lưu trữ sử dụng câu lệnh SAVE"
        }, {
          "Id": 103626,
          "Text": "Viết câu lệnh ROLL TRAN kèm theo tên điểm lưu trữ"
        }]
      }, {
        "Id": 24987,
        "Text": "Chọn đáp án ĐÚNG điền vào chỗ trống Khi không khai báo điểm bắt đầu cho một giao dịch, SQL Server coi ________ và tự động COMMIT câu lệnh lên Server. Nếu câu lệnh gây lỗi sẽ tự động ROLLBACK ĐÚNG hay SAI?",
        "Marks": 1,
        "AnswerId": 103627,
        "Answers": [{
          "Id": 103627,
          "Text": "Từng câu lệnh riêng lẻ là một giao dịch"
        }, {
          "Id": 103628,
          "Text": "Toàn bộ mã kịch bản là một giao dịch"
        }, {
          "Id": 103629,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103630,
          "Text": "Một nhóm câu lệnh là một giao dịch"
        }]
      }, {
        "Id": 24988,
        "Text": "Truyền giá trị tham số cho một Stored Procedure bằng cách nào sau đây?",
        "Marks": 1,
        "AnswerId": 103633,
        "Answers": [{
          "Id": 103631,
          "Text": "Cả hai đáp án đều sai"
        }, {
          "Id": 103632,
          "Text": "Truyền theo tên"
        }, {
          "Id": 103633,
          "Text": "Cả hai đáp án đều đúng"
        }, {
          "Id": 103634,
          "Text": "Truyền theo vị trí"
        }]
      }, {
        "Id": 24989,
        "Text": "Các trường hợp nào sau đây nên sử dụng giao dịch",
        "Marks": 1,
        "AnswerId": 103636,
        "Answers": [{
          "Id": 103635,
          "Text": "Bất cứ mã kịch bản nào cũng nên sử dụng Transaction"
        }, {
          "Id": 103636,
          "Text": "Khi sự thất bại của tập câu lệnh SQL nào đó sẽ vi phạm tính toàn vẹn dữ liệu"
        }, {
          "Id": 103637,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103638,
          "Text": "Một mã kịch bản sử dụng nhiều câu lệnh SELECT"
        }]
      }, {
        "Id": 24990,
        "Text": "Phát biểu nào sau đây ĐÚNG về hàm @@TRANCOUNT",
        "Marks": 1,
        "AnswerId": 103641,
        "Answers": [{
          "Id": 103639,
          "Text": "Khi thực thi câu lệnh COMMIT TRAN, nếu @@TRANCOUNT = 0, mọi thay đổi đã được thực hiện trên CSDL trong suốt giao dịch sẽ được commit."
        }, {
          "Id": 103640,
          "Text": "Khi thực thi câu lệnh COMMIT TRAN, nếu @@TRANCOUNT \u003e 1, mọi thay đổi đã được thực hiện trên CSDL trong suốt giao dịch sẽ được commit."
        }, {
          "Id": 103641,
          "Text": "Khi thực thi câu lệnh COMMIT TRAN, nếu @@TRANCOUNT \u003e 1, các thay đổi sẽ không được commit. Thay vào đó @@TRANCOUNT giảm đi 1."
        }, {
          "Id": 103642,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 24991,
        "Text": "Nên sử dụng giao dịch trong trường hợp nào sau đây?",
        "Marks": 1,
        "AnswerId": 103644,
        "Answers": [{
          "Id": 103643,
          "Text": "Khi viết mã hai hay nhiều trigger"
        }, {
          "Id": 103644,
          "Text": "Khi cập nhật tham chiếu khóa ngoại"
        }, {
          "Id": 103645,
          "Text": "Khi chuyển hàng từ cột này sang cột khác"
        }, {
          "Id": 103646,
          "Text": "Khi sự thất bại của tập câu lệnh SQL nào đó sẽ vi phạm function"
        }]
      }, {
        "Id": 24992,
        "Text": "Phát biểu nào sau đây đúng về Stored Procedure sau: CREATE PROC spParameters @a int = 0, @b int OUT, @String Nvarchar(50) = \u0027%\u0027 AS",
        "Marks": 1,
        "AnswerId": 103650,
        "Answers": [{
          "Id": 103647,
          "Text": "Giá trị của tham số @a và @String luôn luôn là 0 và %"
        }, {
          "Id": 103648,
          "Text": "Lời gọi Stored Procedure này không cần truyền giá trị cho các tham số @a, @String, @b"
        }, {
          "Id": 103649,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103650,
          "Text": "@a và @String là tham số đầu vào tùy chọn, @b là tham số đầu ra"
        }]
      }, {
        "Id": 24993,
        "Text": "Chọn phát biểu ĐÚNG?",
        "Marks": 1,
        "AnswerId": 103651,
        "Answers": [{
          "Id": 103651,
          "Text": "Để khai báo điểm bắt đầu của một giao dịch có thể sử dụng từ khóa BEGIN TRAN hoặc BEGIN TRANSACTION"
        }, {
          "Id": 103652,
          "Text": "Bắt buộc phải viết từ khóa TRAN khi viết câu lệnh BEGIN, COMMIT hoặc ROLLBACK."
        }, {
          "Id": 103653,
          "Text": "Câu lệnh ROLLBACK chỉ sử dụng để quay lui về thời điểm bắt đầu giao dịch"
        }, {
          "Id": 103654,
          "Text": "Tất cả phát biểu đều sai"
        }]
      }, {
        "Id": 24994,
        "Text": "Đâu là phát biểu đúng về Stored Procedure",
        "Marks": 1,
        "AnswerId": 103658,
        "Answers": [{
          "Id": 103655,
          "Text": "Một Stored Procedure không có tham số đầu ra"
        }, {
          "Id": 103656,
          "Text": "Một Stored Procedure có thể chứ nhiều nhóm câu lệnh (Batch)"
        }, {
          "Id": 103657,
          "Text": "Một Stored Procedure không có tham số đầu vào"
        }, {
          "Id": 103658,
          "Text": "Stored Procedure là một tập các câu lệnh T-SQL thực hiện một nhiệm vụ cụ thể, được đặt tên và lưu trữ trong CSDL dưới dạng đã biên dịch."
        }]
      }, {
        "Id": 24995,
        "Text": "Mã kịch bản sau sẽ làm gì khi được thực thi IF OBJECT_ID(\u0027spCopyInvoices\u0027) IS NOT NULL DROP PROC spCopyInvoices CREATE PROC spCopyInvoices AS SELECT * INTO InvoiceCopy FROM Invoices",
        "Marks": 1,
        "AnswerId": 103660,
        "Answers": [{
          "Id": 103659,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103660,
          "Text": "Xóa spCopyInvoices nếu Stored Procedure này đã tồn tại và tạo spCopyInvoices mới"
        }, {
          "Id": 103661,
          "Text": "Xóa spCopyInvoices nếu Stored Procedure này đã tồn tại nhưng không tạo spCopyInvoices mới"
        }, {
          "Id": 103662,
          "Text": "Lỗi cú pháp"
        }]
      }, {
        "Id": 24996,
        "Text": "Phát biều nào sau đây đúng về tên cột của một VIEW A. Trong mọi trường hợp, có thể không đặt tên các cột của VIEW trong câu lệnh CRETE VIEW. B. Cột chứa giá trị được tính toán từ nhiều cột khác phải được đặt tên. C. Nếu cột không được đặt tên, tên cột sẽ ",
        "Marks": 1,
        "AnswerId": 103663,
        "Answers": [{
          "Id": 103663,
          "Text": "B, C Đúng"
        }, {
          "Id": 103664,
          "Text": "C, D Đúng"
        }, {
          "Id": 103665,
          "Text": "D, A Đúng"
        }, {
          "Id": 103666,
          "Text": "A, B Đúng"
        }]
      }, {
        "Id": 24997,
        "Text": "Câu lệnh nào sau đây thực hiện xóa View Vendors_SW",
        "Marks": 1,
        "AnswerId": 103668,
        "Answers": [{
          "Id": 103667,
          "Text": "DROP \u0027Vendors_SW\u0027"
        }, {
          "Id": 103668,
          "Text": "DROP VIEW Vendors_SW"
        }, {
          "Id": 103669,
          "Text": "DROP VIEW \u0027Vendors_SW\u0027"
        }, {
          "Id": 103670,
          "Text": "DROP Vendors_SW"
        }]
      }, {
        "Id": 24998,
        "Text": "Mã kịch bản nào sau đây khai báo thành công một hàm tính tổng hai số",
        "Marks": 1,
        "AnswerId": 103671,
        "Answers": [{
          "Id": 103671,
          "Text": "CREATE FUNCTION fnTonghaiso( @a int = 0, @b int = 0) RETURNS int BEGIN RETURN (@a+@b)END"
        }, {
          "Id": 103672,
          "Text": "CREATE FUNCTION fnTonghaiso( @a int = 0, @b int = 0) RETURN int BEGIN RETURN (@a+@b)END"
        }, {
          "Id": 103673,
          "Text": "CREATE FUNCTION fnTonghaiso @a int = 0, @b int = 0 RETURN int BEGIN RETURN (@a+@b)END"
        }, {
          "Id": 103674,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 24999,
        "Text": "Để chỉnh sửa một VIEW sử dụng chế độ đồ họa View Designer của Management Studio, Click chuột phải vào tên View trong cửa sổ Objects Explorer chọn ___________",
        "Marks": 1,
        "AnswerId": 103676,
        "Answers": [{
          "Id": 103675,
          "Text": "View Modifier"
        }, {
          "Id": 103676,
          "Text": "Design"
        }, {
          "Id": 103677,
          "Text": "View Designer"
        }, {
          "Id": 103678,
          "Text": "Modify"
        }]
      }, {
        "Id": 25000,
        "Text": "Có mấy loại hàm người dùng định nghĩa",
        "Marks": 1,
        "AnswerId": 103681,
        "Answers": [{
          "Id": 103679,
          "Text": "2"
        }, {
          "Id": 103680,
          "Text": "1"
        }, {
          "Id": 103681,
          "Text": "3"
        }, {
          "Id": 103682,
          "Text": "4"
        }]
      }, {
        "Id": 25001,
        "Text": "Phát biểu nào ĐÚNG về đoạn mã sau: CREATE VIEW VendorsDESC AS SELECT VendorID, VendorName FROM vendors ORDER BY VendorName DESC",
        "Marks": 1,
        "AnswerId": 103683,
        "Answers": [{
          "Id": 103683,
          "Text": "Xảy ra lỗi khi thực thi đoạn mã này"
        }, {
          "Id": 103684,
          "Text": "View được tạo ra bởi đoạn mã này là View có thể cập nhật"
        }, {
          "Id": 103685,
          "Text": "View được tạo ra bởi đoạn mã này là View chỉ đọc"
        }, {
          "Id": 103686,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 25002,
        "Text": "Phát biểu nào ĐÚNG về đoạn mã dưới đây? CREATE VIEW OutstandingInvoices AS SELECT InvoiceNumber, InvoiceDate, InvoiceTotal, InvoiceTotal - PaymentTotal – CreditTotal AS BalanceDue FROM Invoices WHERE InvoiceTotal - PaymentTotal - CreditTotal \u003e 0",
        "Marks": 1,
        "AnswerId": 103689,
        "Answers": [{
          "Id": 103687,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103688,
          "Text": "View tạo ra bởi đoạn mã này là View có thể cập nhật"
        }, {
          "Id": 103689,
          "Text": "View tạo ra bởi đoạn mã này là View chỉ đọc"
        }, {
          "Id": 103690,
          "Text": "Xảy ra lỗi cú pháp khi thực thi đoạn mã"
        }]
      }, {
        "Id": 25003,
        "Text": "Phát biểu nào sau đây đúng về VIEW?",
        "Marks": 1,
        "AnswerId": 103694,
        "Answers": [{
          "Id": 103691,
          "Text": "Một View chỉ có thể truy xuất dữ liệu từ một bảng trong CSDL"
        }, {
          "Id": 103692,
          "Text": "Có thể tạo một View trùng tên với tên một bảng đã tồn tại"
        }, {
          "Id": 103693,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103694,
          "Text": "Sử dụng View có thể che dấu và bảo mật dữ liệu"
        }]
      }, {
        "Id": 25004,
        "Text": "Một hàm người dùng định nghĩa có thể trả về giá trị nào sau đây",
        "Marks": 1,
        "AnswerId": 103696,
        "Answers": [{
          "Id": 103695,
          "Text": "Một bảng dữ liệu"
        }, {
          "Id": 103696,
          "Text": "Tất cả đáp án đều đúng"
        }, {
          "Id": 103697,
          "Text": "Giá trị kiểu int"
        }, {
          "Id": 103698,
          "Text": "Giá trị kiểu char"
        }]
      }, {
        "Id": 25005,
        "Text": "Để trả về giá trị cho một hàm người dùng định nghĩa, có thể sử dụng cách nào sau đây?",
        "Marks": 1,
        "AnswerId": 103699,
        "Answers": [{
          "Id": 103699,
          "Text": "Sử dụng câu lệnh RETURN"
        }, {
          "Id": 103700,
          "Text": "Sử dụng tham số đầu ra"
        }, {
          "Id": 103701,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103702,
          "Text": "Sử dụng tham số đầu ra hoặc câu lệnh RETURN"
        }]
      }, {
        "Id": 25006,
        "Text": "Phát biểu nào sau đây ĐÚNG:",
        "Marks": 1,
        "AnswerId": 103705,
        "Answers": [{
          "Id": 103703,
          "Text": "Câu lệnh tạo Login ID sử dụng tùy chọn DEFAULT_DATABASE để thiết lập CSDL mặc định cho Login ID phải được thực thi trong ngữ cảnh CSDL mặc định đó"
        }, {
          "Id": 103704,
          "Text": "Mỗi CSDL duy trì một danh sách Login ID của riêng CSDL đó."
        }, {
          "Id": 103705,
          "Text": "Để tạo database user cho một CSDL cụ thể, câu lệnh CREATE USER phải được thực thi trong ngữ cảnh CSDL đó"
        }, {
          "Id": 103706,
          "Text": "Mỗi Login ID chỉ tạo được một database User"
        }]
      }, {
        "Id": 25007,
        "Text": "Lựa chọn nào sau đây là vai trò CSDL mặc định",
        "Marks": 1,
        "AnswerId": 103710,
        "Answers": [{
          "Id": 103707,
          "Text": "dbcreator"
        }, {
          "Id": 103708,
          "Text": "DbDatawriter"
        }, {
          "Id": 103709,
          "Text": "DbOwner"
        }, {
          "Id": 103710,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 25008,
        "Text": "Chế độ xác thực nào sau đây phải nhập UserName và Password khi đăng nhập SQL Server",
        "Marks": 1,
        "AnswerId": 103711,
        "Answers": [{
          "Id": 103711,
          "Text": "SQL Server Authentication"
        }, {
          "Id": 103712,
          "Text": "Windows Authenticaion"
        }, {
          "Id": 103713,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103714,
          "Text": "Mixed Mode"
        }]
      }, {
        "Id": 25009,
        "Text": "Sau khi tạo một Database User cho một CSDL thì người dùng có thể thực hiện các quyền nào sau đây?",
        "Marks": 1,
        "AnswerId": 103716,
        "Answers": [{
          "Id": 103715,
          "Text": "Thêm một bảng vào CSDL"
        }, {
          "Id": 103716,
          "Text": "Chọn CSDL trên combo box chọn ngữ cảnh CSDL"
        }, {
          "Id": 103717,
          "Text": "Xóa một bảng trong CSDL"
        }, {
          "Id": 103718,
          "Text": "Truy vấn một bảng trong một CSDL trên Server"
        }]
      }, {
        "Id": 25010,
        "Text": "Quyền SELECT có thể tác động lên các đối tượng nào dưới đây:",
        "Marks": 1,
        "AnswerId": 103719,
        "Answers": [{
          "Id": 103719,
          "Text": "Tất cả đáp án đều đúng"
        }, {
          "Id": 103720,
          "Text": "View"
        }, {
          "Id": 103721,
          "Text": "Hàm giá trị bảng"
        }, {
          "Id": 103722,
          "Text": "Bảng"
        }]
      }, {
        "Id": 25011,
        "Text": "Đoạn mã kịch bản nào sau đây thực thi thành công:",
        "Marks": 1,
        "AnswerId": 103723,
        "Answers": [{
          "Id": 103723,
          "Text": "CREATE LOGIN JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE USER JohnDoe FOR LOGIN JohnDoe"
        }, {
          "Id": 103724,
          "Text": "CREATE LOGIN ID JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE USER JohnDoe"
        }, {
          "Id": 103725,
          "Text": "CREATE LOGIN ID JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE USER JohnDoe FOR LOGIN ID JohnDoe"
        }, {
          "Id": 103726,
          "Text": "CREATE LOGIN JohnDoe WITH PASSWORD = \u0027pt8806FG$B\u0027, DEFAULT_DATABASE = AP USE APCREATE DATABASE USER JohnDoe FOR LOGIN JohnDoe"
        }]
      }, {
        "Id": 25012,
        "Text": "Quyền EXECUTE có thể tác động lên các đối tượng nào sau đây:",
        "Marks": 1,
        "AnswerId": 103727,
        "Answers": [{
          "Id": 103727,
          "Text": "Stored Procedure"
        }, {
          "Id": 103728,
          "Text": "Bảng"
        }, {
          "Id": 103729,
          "Text": "Tất cả các đối tượng CSDL"
        }, {
          "Id": 103730,
          "Text": "View"
        }]
      }, {
        "Id": 25013,
        "Text": "Vai trò dbcreator có thể thực hiện các thao tác nào sau đây?",
        "Marks": 1,
        "AnswerId": 103733,
        "Answers": [{
          "Id": 103731,
          "Text": "Phục hồi một CSDL"
        }, {
          "Id": 103732,
          "Text": "Truy vấn các bảng trong một CSDL do người dùng tạo trên server"
        }, {
          "Id": 103733,
          "Text": "Tạo một bảng mới trên một CSDL, do người dùng tạo trên server"
        }, {
          "Id": 103734,
          "Text": "Tất cả đáp án đều đúng"
        }]
      }, {
        "Id": 25014,
        "Text": "Password của một SQL Login ID phải thỏa mãn điều kiện nào sau đây để có tính bảo mật cao?",
        "Marks": 1,
        "AnswerId": 103735,
        "Answers": [{
          "Id": 103735,
          "Text": "Tất cả đáp án đều đúng"
        }, {
          "Id": 103736,
          "Text": "Không sử dụng các giá trị \"sysadmin\", \"sa\", \"administrator\""
        }, {
          "Id": 103737,
          "Text": "Không sử dụng tên máy hoặc tên người dùng hiện thời"
        }, {
          "Id": 103738,
          "Text": "Phải chứa ít nhất ba trong số các kí tự sau: chữ cái viết hoa, chữ cái viết thường, kí tự số, các kí tự đặc biệt (#, %, $...)"
        }]
      }, {
        "Id": 25015,
        "Text": "Lựa chọn đáp án đúng? SQL Server dựa vào _________cấp cho người dùng/nhóm người dùng để xác định các đối tượng, câu lệnh SQL… người đùng được phép tác động trên CSDL",
        "Marks": 1,
        "AnswerId": 103742,
        "Answers": [{
          "Id": 103739,
          "Text": "Quyền"
        }, {
          "Id": 103740,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103741,
          "Text": "Vai trò"
        }, {
          "Id": 103742,
          "Text": "Quyền và vai trò"
        }]
      }, {
        "Id": 25016,
        "Text": "Invoices là tên một bảng trong CSDL. Câu lệnh sp_Help \u0027Invoices\u0027 trả về___________",
        "Marks": 1,
        "AnswerId": 103743,
        "Answers": [{
          "Id": 103743,
          "Text": "Câu lệnh tạo bảng Invoices"
        }, {
          "Id": 103744,
          "Text": "Tất cả các thông tin liên quan đến bảng Invoices bao gồm thông tin các cột của bảng, indexes, ràng buộc, khóa ngoại."
        }, {
          "Id": 103745,
          "Text": "Cả A, B, C đều sai"
        }, {
          "Id": 103746,
          "Text": "Tất cả các thông tin liên quan đến bảng Invoices bao gồm thông tin các cột của bảng, indexes, ràng buộc, khóa ngoại, các Stored Procedure, View, Trigger tham chiếu đến bảng."
        }]
      }, {
        "Id": 25017,
        "Text": "System Stored Procedure nào sau đây đùng để xem danh sách các Stored Procedure, View mà tham chiếu đến bảng Invoices trong CSDL?",
        "Marks": 1,
        "AnswerId": 103750,
        "Answers": [{
          "Id": 103747,
          "Text": "sp_help Invoices"
        }, {
          "Id": 103748,
          "Text": "sp_relationship Invoices"
        }, {
          "Id": 103749,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103750,
          "Text": "sp_depends Invoices"
        }]
      }, {
        "Id": 25018,
        "Text": "Người dùng phải đăng nhạp bằng Login ID có vai trò nào sau đây, để có thể tạo lịch sao lưu tự động cho một CSDL?",
        "Marks": 1,
        "AnswerId": 103751,
        "Answers": [{
          "Id": 103751,
          "Text": "sysadmin"
        }, {
          "Id": 103752,
          "Text": "db_owner"
        }, {
          "Id": 103753,
          "Text": "admin"
        }, {
          "Id": 103754,
          "Text": "dbcreator"
        }]
      }, {
        "Id": 25019,
        "Text": "Tùy chọn chế độ sao lưu nào sau đây có thể tạo ra nhiều bản sao CSDL, được lưu trong cùng một File .bak?",
        "Marks": 1,
        "AnswerId": 103758,
        "Answers": [{
          "Id": 103755,
          "Text": "Duplicate"
        }, {
          "Id": 103756,
          "Text": "Overwrite all existing backup sets"
        }, {
          "Id": 103757,
          "Text": "Multiple copies"
        }, {
          "Id": 103758,
          "Text": "Append to the existing backup set"
        }]
      }, {
        "Id": 25020,
        "Text": "Để tạo lịch sao lưu CSDL tự động trong SQL Server 2008, nhấn chuột phải vào Maintenance Plans trong thư mục Management trên cửa sổ Solution Explorer, chọn ________",
        "Marks": 1,
        "AnswerId": 103759,
        "Answers": [{
          "Id": 103759,
          "Text": "New Maintenance Plan"
        }, {
          "Id": 103760,
          "Text": "Tất cả đáp án đều sai"
        }, {
          "Id": 103761,
          "Text": "New backup Schedule"
        }, {
          "Id": 103762,
          "Text": "New backup plan"
        }]
      }, {
        "Id": 25021,
        "Text": "Phát biểu nào sau đây ĐÚNG?",
        "Marks": 1,
        "AnswerId": 103764,
        "Answers": [{
          "Id": 103763,
          "Text": "Kiểu sao lưu Full backup tốn ít dung lượng bộ nhớ hơn kiểu sao lưu Differential backup"
        }, {
          "Id": 103764,
          "Text": "Kiểu sao lưu Differential backup chỉ sao lưu các dữ liệu mới được cập nhật (thay đổi) kể từ lần full backup trước đó"
        }, {
          "Id": 103765,
          "Text": "Kiểu sao lưu Differential backup sao lưu toàn bộ dữ liệu trong CSDL cùng với bản ghi transaction log ghi nhận các thao tác được thực hiện từ lần sao lưu Full backup gần nhất"
        }, {
          "Id": 103766,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 25022,
        "Text": "Để thực hiện phục hồi CSDL từ một bản sao Full backup và sau đó tiếp tục phục hồi CSDL sử dụng bản sao Differential backup, ở mục recovery state của trang option trong hộp thoại Restore database của lần phục hồi từ bản sao Full backup phải chọn radio butt",
        "Marks": 1,
        "AnswerId": 103769,
        "Answers": [{
          "Id": 103767,
          "Text": "radio button thứ ba"
        }, {
          "Id": 103768,
          "Text": "radio button thứ nhất"
        }, {
          "Id": 103769,
          "Text": "radio button thứ hai"
        }, {
          "Id": 103770,
          "Text": "Tất cả đáp án đều sai"
        }]
      }, {
        "Id": 25023,
        "Text": "Các cấu hình thường phải thực hiện cho một Back Up Database Task trong hộp thoại Back Up Database Task là:A. Ấn định thời gian thực hiện sao lưu CSDLB. Chọn kiểu sao lưu CSDL trong mục Database(s)C. Chọn đường dẫn lưu bản sao CSDL",
        "Marks": 1,
        "AnswerId": 103773,
        "Answers": [{
          "Id": 103771,
          "Text": "A, B đúng"
        }, {
          "Id": 103772,
          "Text": "Tất cả đáp án đều đúng"
        }, {
          "Id": 103773,
          "Text": "A, C đúng"
        }, {
          "Id": 103774,
          "Text": "B, C đúng"
        }]
      }, {
        "Id": 25024,
        "Text": "Lựa chọn nào sau đây là một system stored procedure?",
        "Marks": 1,
        "AnswerId": 103777,
        "Answers": [{
          "Id": 103775,
          "Text": "sp_who"
        }, {
          "Id": 103776,
          "Text": "sp_column"
        }, {
          "Id": 103777,
          "Text": "sp_table"
        }, {
          "Id": 103778,
          "Text": "sp_relationship"
        }]
      }, {
        "Id": 25025,
        "Text": "File sử dụng để phục hồi cơ sở dữ liệu có phần mở rộng làA. MdfB. bakC. LdfD. Sử dụng cả ba loại file trên",
        "Marks": 1,
        "AnswerId": 103779,
        "Answers": [{
          "Id": 103779,
          "Text": "B Đúng"
        }, {
          "Id": 103780,
          "Text": "A Đúng"
        }, {
          "Id": 103781,
          "Text": "D Đúng"
        }, {
          "Id": 103782,
          "Text": "C Đúng"
        }]
      }]
    },
    {
      "Id": "DBBS",
      "quiz": [{
        "Id": 24916,
        "Text": "Phát biểu nào dưới đây là đúng về quản lý dữ liệu?",
        "Marks": 1,
        "AnswerId": 103344,
        "Answers": [{
          "Id": 103343,
          "Text": "Thực hiện thao tác dữ liệu và truy vấn dữ liệu"
        }, {
          "Id": 103344,
          "Text": "Quản lý lưu trữ dữ liệu, thao tác dữ liệu và truy vấn dữ liệu"
        }, {
          "Id": 103345,
          "Text": "Quản lý lưu trữ dữ liệu, thêm, sửa, xóa dữ liệu"
        }, {
          "Id": 103346,
          "Text": "Cho phép lưu trữ dữ liệu và truy vấn dữ liệu"
        }]
      }, {
        "Id": 24917,
        "Text": "Hệ quản trị cơ sở dữ liệu không mang lại các lợi ích nào sau đây?",
        "Marks": 1,
        "AnswerId": 103349,
        "Answers": [{
          "Id": 103347,
          "Text": "Hỗ trợ các ngôn ngữ giao tiếp"
        }, {
          "Id": 103348,
          "Text": "Quản trị các cơ sở dữ liệu"
        }, {
          "Id": 103349,
          "Text": "Cung cấp các truy cập đến tổ chức dữ liệu vật lý"
        }, {
          "Id": 103350,
          "Text": "Có cơ chế an toàn, bảo mật cao"
        }]
      }, {
        "Id": 24918,
        "Text": "Phát biểu nào là đúng cho mô hình dữ liệu phân cấp?",
        "Marks": 1,
        "AnswerId": 103354,
        "Answers": [{
          "Id": 103351,
          "Text": "Liên hệ dữ liệu theo kiểu cha-con, mỗi cha có một con và mỗi con có một cha"
        }, {
          "Id": 103352,
          "Text": "Liên hệ dữ liệu có thể thừa kế giữa cha và con"
        }, {
          "Id": 103353,
          "Text": "Kiểu quan hệ là 1-N và N-N"
        }, {
          "Id": 103354,
          "Text": "Mỗi nút biểu diễn một thực thể dữ liệu và được tổ chức theo hình cây"
        }]
      }, {
        "Id": 24919,
        "Text": "Hệ quản trị cơ sở dữ liệu được hiểu là gì?",
        "Marks": 1,
        "AnswerId": 103355,
        "Answers": [{
          "Id": 103355,
          "Text": "Phần mềm giúp tạo cơ sở dữ liệu, cung cấp cơ chế lưu trữ, thao tác và truy cập cơ sở dữ liệu theo các mô hình cơ sở dữ liệu"
        }, {
          "Id": 103356,
          "Text": "Công cụ giúp lưu trữ, thao tác và truy cập cơ sở dữ liệu quan hệ"
        }, {
          "Id": 103357,
          "Text": "Phần mềm cung cấp cách thức tổ chức, thao tác dữ liệu theo các mô hình cơ sở dữ liệu"
        }, {
          "Id": 103358,
          "Text": "Công cụ giúp lưu trữ, thao tác và truy cập mô hình cơ sở dữ liệu"
        }]
      }, {
        "Id": 24920,
        "Text": "Dữ liệu (data) được mô tả dưới dạng nào dưới đây:",
        "Marks": 1,
        "AnswerId": 103361,
        "Answers": [{
          "Id": 103359,
          "Text": "Các ký tự, ký số"
        }, {
          "Id": 103360,
          "Text": "Hình ảnh, âm thanh"
        }, {
          "Id": 103361,
          "Text": "Các phương án đều đúng"
        }, {
          "Id": 103362,
          "Text": "Ký hiệu"
        }]
      }, {
        "Id": 24921,
        "Text": "Bảng hiệu quảng cáo là dữ liệu gì?",
        "Marks": 1,
        "AnswerId": 103366,
        "Answers": [{
          "Id": 103363,
          "Text": "Dữ liệu dạng âm thanh"
        }, {
          "Id": 103364,
          "Text": "Dữ liệu dạng ký hiệu"
        }, {
          "Id": 103365,
          "Text": "Dữ liệu dạng ký số"
        }, {
          "Id": 103366,
          "Text": "Dữ liệu dạng hình ảnh"
        }]
      }, {
        "Id": 24922,
        "Text": "Phát biểu nào sau đây là không đúng với mô hình cơ sở dữ liệu hướng đối tượng?",
        "Marks": 1,
        "AnswerId": 103369,
        "Answers": [{
          "Id": 103367,
          "Text": "Các đối tượng trao đổi thông qua các phương thức"
        }, {
          "Id": 103368,
          "Text": "Một đối tượng gồm các thuộc tính, các phương thức"
        }, {
          "Id": 103369,
          "Text": "Các đối tượng không thể được lưu trữ trong cơ sở dữ liệu"
        }, {
          "Id": 103370,
          "Text": "Các đối tượng có thể được sinh ra từ việc thừa kế"
        }]
      }, {
        "Id": 24923,
        "Text": "Hệ quản trị cơ sở dữ liệu phổ biến nhất hiện nay là gì?",
        "Marks": 1,
        "AnswerId": 103372,
        "Answers": [{
          "Id": 103371,
          "Text": "Hệ quản trị cơ sở dữ liệu phân cấp"
        }, {
          "Id": 103372,
          "Text": "Hệ quản trị cơ sở dữ liệu quan hệ"
        }, {
          "Id": 103373,
          "Text": "Hệ quản trị cơ sở dữ liệu mạng"
        }, {
          "Id": 103374,
          "Text": "Hệ quản trị cơ sở dữ liệu hướng đối tượng"
        }]
      }, {
        "Id": 24924,
        "Text": "Phát biểu nào dưới đây là đúng với hệ quản trị cơ sở dữ liệu MySQL?",
        "Marks": 1,
        "AnswerId": 103378,
        "Answers": [{
          "Id": 103375,
          "Text": "Một hệ quản trị dữ liệu dạng file, không thể cho nhiều người cùng truy xuất"
        }, {
          "Id": 103376,
          "Text": "Một hệ quản trị cơ sở dữ liệu cỡ nhỏ, chủ yếu dùng cho mục đích cá nhân"
        }, {
          "Id": 103377,
          "Text": "Một hệ quản trị cơ sở dữ liệu của hãng Microsoft"
        }, {
          "Id": 103378,
          "Text": "Một hệ quản trị cơ sở liệu mã nguồn mở rất được ưa chuộng"
        }]
      }, {
        "Id": 24925,
        "Text": "Những thông tin được nhập từ bàn phím là dữ liệu gì?",
        "Marks": 1,
        "AnswerId": 103382,
        "Answers": [{
          "Id": 103379,
          "Text": "Dữ liệu dạng âm thanh"
        }, {
          "Id": 103380,
          "Text": "Dữ liệu dạng hình ảnh"
        }, {
          "Id": 103381,
          "Text": "Dữ liệu dạng ký hiệu"
        }, {
          "Id": 103382,
          "Text": "Dữ liệu dạng ký tự, ký số"
        }]
      }, {
        "Id": 24926,
        "Text": "Quan hệ N-N là gì?",
        "Marks": 1,
        "AnswerId": 103386,
        "Answers": [{
          "Id": 103383,
          "Text": "Một thực thể của tập này có thể liên kết nhiều tập thực thể khác, và ngược lại"
        }, {
          "Id": 103384,
          "Text": "Nhiều thực thể của tập này có thể liên kết với nhiều tập kia, và ngược lại"
        }, {
          "Id": 103385,
          "Text": "Một thực thể của tập này có thể liên kết 0, 1 hoặc nhiều tập thực thể khác, và ngược lại"
        }, {
          "Id": 103386,
          "Text": "Một thực thể của tập này có thể liên kết 0, 1 hoặc nhiều thực thể của tập kia, và ngược lại"
        }]
      }, {
        "Id": 24927,
        "Text": "Thứ tự thiết kế cơ sở dữ liệu quan hệ nào dưới đây là đúng?",
        "Marks": 1,
        "AnswerId": 103389,
        "Answers": [{
          "Id": 103387,
          "Text": "Thiết kế mức khái niệm, thiết kế mức vật lý, thiết kế mức logic"
        }, {
          "Id": 103388,
          "Text": "Thiết kế mức vật lý, thiết kế mức logic, thiết kế mức khái niệm"
        }, {
          "Id": 103389,
          "Text": "Thiết kế mức khái niệm, thiết kế mức logic, thiết kế mức vật lý"
        }, {
          "Id": 103390,
          "Text": "Thiết kế mức vật lý, thiết kế mức khái niệm, thiết kế mức logic"
        }]
      }, {
        "Id": 24928,
        "Text": "Quan hệ 1-1 là gì?",
        "Marks": 1,
        "AnswerId": 103391,
        "Answers": [{
          "Id": 103391,
          "Text": "Một thực thể của tập này chỉ liên kết với một thực thể của tập kia, và ngược lại"
        }, {
          "Id": 103392,
          "Text": "Một thực thể của tập thực thể này liên kết với nhiều thực thể của tập thực thể kia, và ngược lại"
        }, {
          "Id": 103393,
          "Text": "Một tập thực thể này liên kết với một tập thực thể kia, và ngược lại"
        }, {
          "Id": 103394,
          "Text": "Một thực thể bất kỳ có thể liên kết với một thực thể trong tập thực thể đó, và ngược lại"
        }]
      }, {
        "Id": 24929,
        "Text": "Một thực thể được biểu diễn trong cơ sở dữ liệu mức vật lý thành đối tượng gì?",
        "Marks": 1,
        "AnswerId": 103398,
        "Answers": [{
          "Id": 103395,
          "Text": "Hàng"
        }, {
          "Id": 103396,
          "Text": "Khóa"
        }, {
          "Id": 103397,
          "Text": "Cột"
        }, {
          "Id": 103398,
          "Text": "Bảng"
        }]
      }, {
        "Id": 24930,
        "Text": "Mối quan hệ giữa các thực thể bao gồm:",
        "Marks": 1,
        "AnswerId": 103400,
        "Answers": [{
          "Id": 103399,
          "Text": "Quan hệ 0-0, 1-1, n-n"
        }, {
          "Id": 103400,
          "Text": "Quan hệ 1-1, 1-n, n-n"
        }, {
          "Id": 103401,
          "Text": "Quan hệ 0-1, 1-1, n-n"
        }, {
          "Id": 103402,
          "Text": "Quan hệ 1-n, n-n, n-1"
        }]
      }, {
        "Id": 24931,
        "Text": "Ràng buộc nhằm nhấn mạnh sự chính xác của dữ liệu nhập vào là ràng buộc nào dưới đây?",
        "Marks": 1,
        "AnswerId": 103404,
        "Answers": [{
          "Id": 103403,
          "Text": "Ràng buộc quy tắc"
        }, {
          "Id": 103404,
          "Text": "Ràng buộc toàn vẹn"
        }, {
          "Id": 103405,
          "Text": "Ràng buộc sự kiện"
        }, {
          "Id": 103406,
          "Text": "Ràng buộc chính xác"
        }]
      }, {
        "Id": 24932,
        "Text": "Các thủ tục, nguyên tắc cần phải tuân theo và thể hiện trong cơ sở dữ liệu như là các ràng buộc được gọi là gì?",
        "Marks": 1,
        "AnswerId": 103409,
        "Answers": [{
          "Id": 103407,
          "Text": "Thủ tục công ty"
        }, {
          "Id": 103408,
          "Text": "Quy trình công việc"
        }, {
          "Id": 103409,
          "Text": "Quy tắc nghiệp vụ"
        }, {
          "Id": 103410,
          "Text": "Quy định công việc"
        }]
      }, {
        "Id": 24933,
        "Text": "Danh từ nào sau đây có thể là thực thể?",
        "Marks": 1,
        "AnswerId": 103412,
        "Answers": [{
          "Id": 103411,
          "Text": "Company Name"
        }, {
          "Id": 103412,
          "Text": "Customer"
        }, {
          "Id": 103413,
          "Text": "Customer ID"
        }, {
          "Id": 103414,
          "Text": "Address"
        }]
      }, {
        "Id": 24934,
        "Text": "Thuộc tính để xác định duy nhất một bộ dữ liệu trong một quan hệ gọi là gì?",
        "Marks": 1,
        "AnswerId": 103418,
        "Answers": [{
          "Id": 103415,
          "Text": "Thuộc tính chính"
        }, {
          "Id": 103416,
          "Text": "Khóa ngoại"
        }, {
          "Id": 103417,
          "Text": "Thuộc tính xác định"
        }, {
          "Id": 103418,
          "Text": "Khóa chính"
        }]
      }, {
        "Id": 24935,
        "Text": "Trong Access, các bước thiết kế truy vấn dựa trên bảng điều khiển nào dưới đây là hợp lý?",
        "Marks": 1,
        "AnswerId": 103421,
        "Answers": [{
          "Id": 103419,
          "Text": "Mô tả tiêu chuẩn, lựa chọn sắp xếp, chọn bảng, chọn cột"
        }, {
          "Id": 103420,
          "Text": "Chọn bảng, mô tả tiêu chuẩn, lựa chọn sắp xếp, chọn trường"
        }, {
          "Id": 103421,
          "Text": "Chọn bảng, chọn cột, mô tả tiêu chuẩn, lựa chọn sắp xếp"
        }, {
          "Id": 103422,
          "Text": "Mô tả tiêu chuẩn, chọn bảng, chọn trường, lựa chọn sắp xếp"
        }]
      }, {
        "Id": 24936,
        "Text": "Truy vấn nào dưới đây lựa chọn tất cả các cột của bảng EMPLOYEES?",
        "Marks": 1,
        "AnswerId": 103424,
        "Answers": [{
          "Id": 103423,
          "Text": "SELECT ALL FROM EMPLOYEES"
        }, {
          "Id": 103424,
          "Text": "SELECT * FROM EMPLOYEES"
        }, {
          "Id": 103425,
          "Text": "SELECT * WHERE EMPLOYEES"
        }, {
          "Id": 103426,
          "Text": "SELECT ALL WHERE EMPLOYEES"
        }]
      }, {
        "Id": 24937,
        "Text": "Truy vấn nào dưới đây hiển thị thông tin nhân viên có lương lớn hơn 10000 và sắp xếp theo tên, họ ?",
        "Marks": 1,
        "AnswerId": 103429,
        "Answers": [{
          "Id": 103427,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 ORDER WITH LAST_NAME, FIRST_NAME"
        }, {
          "Id": 103428,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 SORT BY LAST_NAME, FIRST_NAME"
        }, {
          "Id": 103429,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 ORDER BY FIRST_NAME, LAST_NAME"
        }, {
          "Id": 103430,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY \u003e 10000 ORDER LAST_NAME, FIRST_NAME"
        }]
      }, {
        "Id": 24938,
        "Text": "Bốn nhóm lệnh SQL nào dưới đây là đúng?",
        "Marks": 1,
        "AnswerId": 103433,
        "Answers": [{
          "Id": 103431,
          "Text": "Nhóm lựa chọn dữ liệu, nhóm định nghĩa dữ liệu, nhóm thao tác dữ liệu, nhóm nhập dữ liệu"
        }, {
          "Id": 103432,
          "Text": "Nhóm truy vấn dữ liệu, nhóm thay đổi dữ liệu, nhóm thao tác dữ liệu, nhóm điều khiển dữ liệu"
        }, {
          "Id": 103433,
          "Text": "Nhóm truy vấn dữ liệu, nhóm định nghĩa dữ liệu, nhóm thao tác dữ liệu, nhóm điều khiển dữ liệu"
        }, {
          "Id": 103434,
          "Text": "Nhóm lựa chọn dữ liệu, nhóm định nghĩa dữ liệu, nhóm thao tác dữ liệu, nhóm điều khiển dữ liệu"
        }]
      }, {
        "Id": 24939,
        "Text": "Truy vấn nào dưới đây hiển thị thông tin nhân viên có tên họ bắt đầu bằng Pete ?",
        "Marks": 1,
        "AnswerId": 103435,
        "Answers": [{
          "Id": 103435,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027Pete%\u0027"
        }, {
          "Id": 103436,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027%Pete%\u0027"
        }, {
          "Id": 103437,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027Pete\u0027"
        }, {
          "Id": 103438,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027%Pete\u0027"
        }]
      }, {
        "Id": 24940,
        "Text": "Truy vấn nào dưới đây trả về thông tin nhân viên được sắp xếp thứ tự giảm dần theo tên nhân viên ?",
        "Marks": 1,
        "AnswerId": 103440,
        "Answers": [{
          "Id": 103439,
          "Text": "SELECT * FROM EMPLOYEES ORDER First_Name DESC"
        }, {
          "Id": 103440,
          "Text": "SELECT * FROM EMPLOYEES ORDER BY First_Name DESC"
        }, {
          "Id": 103441,
          "Text": "SELECT * FROM EMPLOYEES SORT \u0027First_Name\u0027 DESC"
        }, {
          "Id": 103442,
          "Text": "SELECT * FROM EMPLOYEES SORT BY \u0027First_Name\u0027 DESC"
        }]
      }, {
        "Id": 24941,
        "Text": "Truy vấn nào dưới đây hiển thị thông tin nhân viên có tên là Peter và họ là Jackson ?",
        "Marks": 1,
        "AnswerId": 103445,
        "Answers": [{
          "Id": 103443,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME \u003c\u003e\u0027Peter\u0027 AND LAST_NAME\u003c\u003e\u0027Jackson\u0027"
        }, {
          "Id": 103444,
          "Text": "SELECT FIRST_NAME=\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027 FROM EMPLOYEES WHERE FIRST_NAME =\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027"
        }, {
          "Id": 103445,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME =\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027"
        }, {
          "Id": 103446,
          "Text": "SELECT FIRST_NAME=\u0027Peter\u0027 AND LAST_NAME=\u0027Jackson\u0027 FROM EMPLOYEES"
        }]
      }, {
        "Id": 24942,
        "Text": "Từ khóa nào dưới đây của SQL được sử dụng để sắp xếp tập kết quả truy vấn?",
        "Marks": 1,
        "AnswerId": 103449,
        "Answers": [{
          "Id": 103447,
          "Text": "SORT BY"
        }, {
          "Id": 103448,
          "Text": "SORT"
        }, {
          "Id": 103449,
          "Text": "ORDER BY"
        }, {
          "Id": 103450,
          "Text": "ORDER"
        }]
      }, {
        "Id": 24943,
        "Text": "Truy vấn nào dưới đây hiển thị thông tin nhân viên có tên họ dài bất kỳ, với chữ đầu là A hoặc B hoặc C ?",
        "Marks": 1,
        "AnswerId": 103453,
        "Answers": [{
          "Id": 103451,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[^ABC]%\u0027"
        }, {
          "Id": 103452,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[ABC]_\u0027"
        }, {
          "Id": 103453,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[ABC]%\u0027"
        }, {
          "Id": 103454,
          "Text": "SELECT * FROM EMPLOYEES WHERE FIRST_NAME LIKE \u0027[ABC]*\u0027"
        }]
      }, {
        "Id": 24944,
        "Text": "Nhóm lệnh định nghĩa dữ liệu của ngôn ngữ SQL là gì?",
        "Marks": 1,
        "AnswerId": 103458,
        "Answers": [{
          "Id": 103455,
          "Text": "Insert, Update, Delete"
        }, {
          "Id": 103456,
          "Text": "Grant, Revoke"
        }, {
          "Id": 103457,
          "Text": "Select"
        }, {
          "Id": 103458,
          "Text": "Create, Drop, Alter"
        }]
      }, {
        "Id": 24945,
        "Text": "Truy vấn nào dưới đây hiển thị thông tin nhân viên có lương từ 10000 đến 11000 ?",
        "Marks": 1,
        "AnswerId": 103459,
        "Answers": [{
          "Id": 103459,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY BETWEEN 10000 AND 11000"
        }, {
          "Id": 103460,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY = 10000 AND 11000"
        }, {
          "Id": 103461,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY 10000 AND 11000"
        }, {
          "Id": 103462,
          "Text": "SELECT * FROM EMPLOYEES WHERE SALARY =\u003e 10000 AND \u003c= 11000"
        }]
      }, {
        "Id": 24946,
        "Text": "Câu lệnh SQL nào dưới đây thêm dữ liệu mới vào bảng Employees?",
        "Marks": 1,
        "AnswerId": 103466,
        "Answers": [{
          "Id": 103463,
          "Text": "INSERT Employees(Employee_ID, First_Name, Last_Name) INTO (213, \u0027Abraham\u0027, \u0027Lincoln\u0027)"
        }, {
          "Id": 103464,
          "Text": "INSERT (213, \u0027Abraham\u0027, \u0027Lincoln\u0027) INTO Employees(Employee_ID, First_Name, Last_Name)"
        }, {
          "Id": 103465,
          "Text": "INSERT VALUES (213, \u0027Abraham\u0027, \u0027Lincoln\u0027) INTO Employees(Employee_ID, First_Name, Last_Name)"
        }, {
          "Id": 103466,
          "Text": "INSERT INTO Employees(Employee_ID, First_Name, Last_Name) VALUES (213, \u0027Abraham\u0027, \u0027Lincoln\u0027)"
        }]
      }, {
        "Id": 24947,
        "Text": "Câu lệnh SQL nào dưới đây để tạo bảng KHACH_HANG ?",
        "Marks": 1,
        "AnswerId": 103467,
        "Answers": [{
          "Id": 103467,
          "Text": "CREATE TABLE Khach_Hang (MaKH NUMBER(6) NOT NULL, Hoten VARCHAR(30) NOT NULL, Diachi VARCHAR(50) NOT NULL, Dienthoai VARCHAR(15) NOT NULL);"
        }, {
          "Id": 103468,
          "Text": "ALTER TABLE Khach_Hang (MaKH NUMBER(6) NOT NULL, Hoten VARCHAR(30) NOT NULL, Diachi VARCHAR(50) NOT NULL, Dienthoai VARCHAR(15) NOT NULL);"
        }, {
          "Id": 103469,
          "Text": "CREATE TABLE Khach_Hang (MaKH, Hoten, Diachi, Dienthoai);"
        }, {
          "Id": 103470,
          "Text": "NEW TABLE Khach_Hang ( MaKH NUMBER(6) NOT NULL, Hoten VARCHAR(30) NOT NULL, Diachi VARCHAR(50) NOT NULL, Dienthoai VARCHAR(15) NOT NULL);"
        }]
      }, {
        "Id": 24948,
        "Text": "Câu lệnh SQL nào dưới đây để xóa dữ liệu của nhân viên có mã số 213 ?",
        "Marks": 1,
        "AnswerId": 103474,
        "Answers": [{
          "Id": 103471,
          "Text": "DELETE * FROM Employees WHERE Employee_ID = 213"
        }, {
          "Id": 103472,
          "Text": "DELETE Employees WHERE Employee_ID = 213"
        }, {
          "Id": 103473,
          "Text": "DELETE Employees.Employee_ID = 213"
        }, {
          "Id": 103474,
          "Text": "DELETE FROM Employees WHERE Employee_ID = 213"
        }]
      }, {
        "Id": 24949,
        "Text": "Truy vấn nào dưới đây tìm mức lương nhỏ nhất của các nhân viên theo từng bộ phận?",
        "Marks": 1,
        "AnswerId": 103475,
        "Answers": [{
          "Id": 103475,
          "Text": "SELECT Department_ID, MIN(Salary) FROM Employees GROUP BY Department_ID"
        }, {
          "Id": 103476,
          "Text": "SELECT Department_ID, MIN(Salary) FROM Employees GROUP Department_ID"
        }, {
          "Id": 103477,
          "Text": "SELECT Department_ID, MIN(Salary) FROM Employees WHERE MIN(Salary)"
        }, {
          "Id": 103478,
          "Text": "SELECT Department_ID, MIN(Salary) FROM Employees.Department_ID"
        }]
      }, {
        "Id": 24950,
        "Text": "Truy vấn nào dưới đây tìm mức lương nhỏ nhất của các nhân viên?",
        "Marks": 1,
        "AnswerId": 103481,
        "Answers": [{
          "Id": 103479,
          "Text": "SELECT SMALLEST(Salary) FROM Employees"
        }, {
          "Id": 103480,
          "Text": "SELECT MIN Salary FROM Employees"
        }, {
          "Id": 103481,
          "Text": "SELECT MIN(Salary) FROM Employees"
        }, {
          "Id": 103482,
          "Text": "SELECT SMALLEST Salary FROM Employees"
        }]
      }, {
        "Id": 24951,
        "Text": "Câu lệnh SQL nào dưới đây thu hồi quyền UPDATE cho người dùng cơ sở dữ liệu HR ?",
        "Marks": 1,
        "AnswerId": 103486,
        "Answers": [{
          "Id": 103483,
          "Text": "REVOKE UPDATE ON HR"
        }, {
          "Id": 103484,
          "Text": "REVOKE UPDATE TO HR"
        }, {
          "Id": 103485,
          "Text": "REVOKE UPDATE INTO HR"
        }, {
          "Id": 103486,
          "Text": "REVOKE UPDATE FROM HR"
        }]
      }, {
        "Id": 24952,
        "Text": "Câu lệnh SQL nào dưới đây để xóa bảng Khach_Hang khỏi cơ sở dữ liệu?",
        "Marks": 1,
        "AnswerId": 103488,
        "Answers": [{
          "Id": 103487,
          "Text": "TRUNCATE TABLE Khach_Hang IGNORE CONSTRAINTS;"
        }, {
          "Id": 103488,
          "Text": "DROP TABLE Khach_Hang CASCADE CONSTRAINTS;"
        }, {
          "Id": 103489,
          "Text": "DROP TABLE Khach_Hang IGNORE CONSTRAINTS;"
        }, {
          "Id": 103490,
          "Text": "ERASE TABLE Khach_Hang CASCADE CONSTRAINTS;"
        }]
      }, {
        "Id": 24953,
        "Text": "Trong mệnh đề SELECT, hàm tìm giá trị lớn nhất trong cột là gì?",
        "Marks": 1,
        "AnswerId": 103493,
        "Answers": [{
          "Id": 103491,
          "Text": "LARGE"
        }, {
          "Id": 103492,
          "Text": "BEST"
        }, {
          "Id": 103493,
          "Text": "MAX"
        }, {
          "Id": 103494,
          "Text": "BIG"
        }]
      }, {
        "Id": 24954,
        "Text": "Câu lệnh SQL nào dưới đây để thêm một ràng buộc trong đó cột MaKH là duy nhất?",
        "Marks": 1,
        "AnswerId": 103495,
        "Answers": [{
          "Id": 103495,
          "Text": "ALTER TABLE Khach_Hang ADD CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);"
        }, {
          "Id": 103496,
          "Text": "ALTER TABLE Khach_Hang NEW CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);"
        }, {
          "Id": 103497,
          "Text": "ALTER TABLE Khach_Hang INSERT CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);"
        }, {
          "Id": 103498,
          "Text": "ALTER TABLE Khach_Hang UNIQUE (MaKH);"
        }]
      }, {
        "Id": 24955,
        "Text": "Câu lệnh nào dưới đây được sử dụng để thay đổi cấu trúc của một bảng trong cơ sở dữ liệu?",
        "Marks": 1,
        "AnswerId": 103502,
        "Answers": [{
          "Id": 103499,
          "Text": "REPAIR TABLE …"
        }, {
          "Id": 103500,
          "Text": "CHANGE TABLE …"
        }, {
          "Id": 103501,
          "Text": "REDO TABLE …"
        }, {
          "Id": 103502,
          "Text": "ALTER TABLE …"
        }]
      }]
    },
    {
      "Id": "GAME",
      "quiz": [{
        "Id": 25420,
        "Text": "Đâu không phải là đặc điểm của Unity?",
        "Marks": 1,
        "AnswerId": 105301,
        "Answers": [{
          "Id": 105299,
          "Text": "Lighting"
        }, {
          "Id": 105300,
          "Text": "Rendering"
        }, {
          "Id": 105301,
          "Text": "Assets"
        }, {
          "Id": 105302,
          "Text": "Physics"
        }]
      }, {
        "Id": 25421,
        "Text": "Để hiển thị mọi thông tin về đối tượng đang làm việc một cách chi tiết, kể cả những Components được đính kèm và những thuộc tính của nó ta sử dụng mục nào sau đây?",
        "Marks": 1,
        "AnswerId": 105303,
        "Answers": [{
          "Id": 105303,
          "Text": "Inspector"
        }, {
          "Id": 105304,
          "Text": "Project"
        }, {
          "Id": 105305,
          "Text": "Hierachy"
        }, {
          "Id": 105306,
          "Text": "Game"
        }]
      }, {
        "Id": 25422,
        "Text": "Thanh công cụ nào sau đây điều khiển việc bố trí giao diện màn hình?",
        "Marks": 1,
        "AnswerId": 105309,
        "Answers": [{
          "Id": 105307,
          "Text": "Control Object"
        }, {
          "Id": 105308,
          "Text": "Layers"
        }, {
          "Id": 105309,
          "Text": "Layout"
        }, {
          "Id": 105310,
          "Text": "TestGame"
        }]
      }, {
        "Id": 25423,
        "Text": "Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?",
        "Marks": 1,
        "AnswerId": 105312,
        "Answers": [{
          "Id": 105311,
          "Text": "Rotate tool"
        }, {
          "Id": 105312,
          "Text": "Hand tool"
        }, {
          "Id": 105313,
          "Text": "Scale tool"
        }, {
          "Id": 105314,
          "Text": "Move tool"
        }]
      }, {
        "Id": 25424,
        "Text": "Networking không cung cấp tính năng nào sau đây?",
        "Marks": 1,
        "AnswerId": 105315,
        "Answers": [{
          "Id": 105315,
          "Text": "Physics"
        }, {
          "Id": 105316,
          "Text": "Realtime Networking"
        }, {
          "Id": 105317,
          "Text": "Remote Procedure Call"
        }, {
          "Id": 105318,
          "Text": "State Synchronization"
        }]
      }, {
        "Id": 25425,
        "Text": "Phím E là phím tắt của công cụ nào sau đây?",
        "Marks": 1,
        "AnswerId": 105320,
        "Answers": [{
          "Id": 105319,
          "Text": "Hand tool"
        }, {
          "Id": 105320,
          "Text": "Rotate tool"
        }, {
          "Id": 105321,
          "Text": "Scale tool"
        }, {
          "Id": 105322,
          "Text": "Move tool"
        }]
      }, {
        "Id": 25426,
        "Text": "Phím tắt nào sau đây được dùng để đổi tên đối tượng nhanh?",
        "Marks": 1,
        "AnswerId": 105323,
        "Answers": [{
          "Id": 105323,
          "Text": "F2"
        }, {
          "Id": 105324,
          "Text": "F"
        }, {
          "Id": 105325,
          "Text": "Cmd"
        }, {
          "Id": 105326,
          "Text": "Enter"
        }]
      }, {
        "Id": 25427,
        "Text": "Phím R là phím tắt của công cụ nào sau đây?",
        "Marks": 1,
        "AnswerId": 105328,
        "Answers": [{
          "Id": 105327,
          "Text": "Hand tool"
        }, {
          "Id": 105328,
          "Text": "Scale tool"
        }, {
          "Id": 105329,
          "Text": "Move tool"
        }, {
          "Id": 105330,
          "Text": "Rotate tool"
        }]
      }, {
        "Id": 25428,
        "Text": "Ngôn ngữ nào không được sử dụng trong Unity?",
        "Marks": 1,
        "AnswerId": 105334,
        "Answers": [{
          "Id": 105331,
          "Text": "Java script"
        }, {
          "Id": 105332,
          "Text": "C#"
        }, {
          "Id": 105333,
          "Text": "Boo"
        }, {
          "Id": 105334,
          "Text": "php"
        }]
      }, {
        "Id": 25429,
        "Text": "Unity hỗ trợ tính năng nào cho phép tạo ra cây cối với hình dạng, kích thước và kiểu dáng đa dạng?",
        "Marks": 1,
        "AnswerId": 105338,
        "Answers": [{
          "Id": 105335,
          "Text": "Rendering"
        }, {
          "Id": 105336,
          "Text": "Programming"
        }, {
          "Id": 105337,
          "Text": "Physics"
        }, {
          "Id": 105338,
          "Text": "Terrains"
        }]
      }, {
        "Id": 25430,
        "Text": "Để tạo mới một Folder ta vào menu nào sau đây?",
        "Marks": 1,
        "AnswerId": 105340,
        "Answers": [{
          "Id": 105339,
          "Text": "GameObject"
        }, {
          "Id": 105340,
          "Text": "Assets"
        }, {
          "Id": 105341,
          "Text": "Component"
        }, {
          "Id": 105342,
          "Text": "File"
        }]
      }, {
        "Id": 25431,
        "Text": "Phím Q là phím tắt của công cụ nào sau đây?",
        "Marks": 1,
        "AnswerId": 105346,
        "Answers": [{
          "Id": 105343,
          "Text": "Scale tool"
        }, {
          "Id": 105344,
          "Text": "Move tool"
        }, {
          "Id": 105345,
          "Text": "Rotate tool"
        }, {
          "Id": 105346,
          "Text": "Hand tool"
        }]
      }, {
        "Id": 25432,
        "Text": "Để tạo mới một Scene ta vào menu nào sau đây?",
        "Marks": 1,
        "AnswerId": 105350,
        "Answers": [{
          "Id": 105347,
          "Text": "Assets"
        }, {
          "Id": 105348,
          "Text": "GameObject"
        }, {
          "Id": 105349,
          "Text": "Edit"
        }, {
          "Id": 105350,
          "Text": "File"
        }]
      }, {
        "Id": 25433,
        "Text": "Phím W là phím tắt của công cụ nào sau đây?",
        "Marks": 1,
        "AnswerId": 105352,
        "Answers": [{
          "Id": 105351,
          "Text": "Scale tool"
        }, {
          "Id": 105352,
          "Text": "Move tool"
        }, {
          "Id": 105353,
          "Text": "Hand tool"
        }, {
          "Id": 105354,
          "Text": "Rotate tool"
        }]
      }, {
        "Id": 25434,
        "Text": "Unity có bao nhiêu đặc điểm nào?",
        "Marks": 1,
        "AnswerId": 105358,
        "Answers": [{
          "Id": 105355,
          "Text": "8"
        }, {
          "Id": 105356,
          "Text": "5"
        }, {
          "Id": 105357,
          "Text": "6"
        }, {
          "Id": 105358,
          "Text": "7"
        }]
      }, {
        "Id": 25435,
        "Text": "Đâu là nơi chứa danh sách các GameObject trong scene?",
        "Marks": 1,
        "AnswerId": 105362,
        "Answers": [{
          "Id": 105359,
          "Text": "Project"
        }, {
          "Id": 105360,
          "Text": "Scene"
        }, {
          "Id": 105361,
          "Text": "Inspector"
        }, {
          "Id": 105362,
          "Text": "Hierachy"
        }]
      }, {
        "Id": 25436,
        "Text": "Đâu không phải là giao diện của unity?",
        "Marks": 1,
        "AnswerId": 105365,
        "Answers": [{
          "Id": 105363,
          "Text": "Hierachy"
        }, {
          "Id": 105364,
          "Text": "Project"
        }, {
          "Id": 105365,
          "Text": "Physics"
        }, {
          "Id": 105366,
          "Text": "Inspector"
        }]
      }, {
        "Id": 25437,
        "Text": "Mỗi game có thể có bao nhiêu scene?",
        "Marks": 1,
        "AnswerId": 105367,
        "Answers": [{
          "Id": 105367,
          "Text": "N"
        }, {
          "Id": 105368,
          "Text": "2"
        }, {
          "Id": 105369,
          "Text": "1"
        }, {
          "Id": 105370,
          "Text": "0"
        }]
      }, {
        "Id": 25438,
        "Text": "Để tạo mới một Thư mục Asset ta thực hiện trong cửa sổ nào sau đây?",
        "Marks": 1,
        "AnswerId": 105371,
        "Answers": [{
          "Id": 105371,
          "Text": "Project"
        }, {
          "Id": 105372,
          "Text": "Inspector"
        }, {
          "Id": 105373,
          "Text": "Hierachy"
        }, {
          "Id": 105374,
          "Text": "Scene"
        }]
      }, {
        "Id": 25439,
        "Text": "Trong Scene, công cụ dùng để điều chỉnh tỷ lệ là công cụ nào?",
        "Marks": 1,
        "AnswerId": 105378,
        "Answers": [{
          "Id": 105375,
          "Text": "Hand tool"
        }, {
          "Id": 105376,
          "Text": "Rotate tool"
        }, {
          "Id": 105377,
          "Text": "Move tool"
        }, {
          "Id": 105378,
          "Text": "Scale tool"
        }]
      }, {
        "Id": 25440,
        "Text": "Thông tin về vị trí, góc xoay và tỷ lệ của đối tượng được quy định trong thành phần nào?",
        "Marks": 1,
        "AnswerId": 105382,
        "Answers": [{
          "Id": 105379,
          "Text": "Physics"
        }, {
          "Id": 105380,
          "Text": "UI"
        }, {
          "Id": 105381,
          "Text": "Script"
        }, {
          "Id": 105382,
          "Text": "Transform"
        }]
      }, {
        "Id": 25441,
        "Text": "Tất cả các tập tin, thư mục của các dự án Unity đều được lưu trữ trong một thư mục có tên là?",
        "Marks": 1,
        "AnswerId": 105384,
        "Answers": [{
          "Id": 105383,
          "Text": "GameObject"
        }, {
          "Id": 105384,
          "Text": "Assets"
        }, {
          "Id": 105385,
          "Text": "Scenes"
        }, {
          "Id": 105386,
          "Text": "ProjectSettings"
        }]
      }, {
        "Id": 25442,
        "Text": "Để lựa chọn một Sprite Render cho Empty GameObject ta thực hiện như sau:",
        "Marks": 1,
        "AnswerId": 105390,
        "Answers": [{
          "Id": 105387,
          "Text": "Component/Rendering/Sprite Renderer"
        }, {
          "Id": 105388,
          "Text": "ObjectGame/Rendering/Sprite Renderer"
        }, {
          "Id": 105389,
          "Text": "Add Component/Sprite Renderer"
        }, {
          "Id": 105390,
          "Text": "Add Component/Rendering/Sprite Renderer"
        }]
      }, {
        "Id": 25443,
        "Text": "Với kiểu nào, Unity editor sẽ tự động tìm những hình ảnh khác nhau hoặc có thể dùng chuột để chọn vùng ảnh mà ta cần cắt?",
        "Marks": 1,
        "AnswerId": 105392,
        "Answers": [{
          "Id": 105391,
          "Text": "Cả 2 phương án trên đều sai"
        }, {
          "Id": 105392,
          "Text": "Automatic"
        }, {
          "Id": 105393,
          "Text": "Cả 2 phương án trên đều đúng"
        }, {
          "Id": 105394,
          "Text": "Grid"
        }]
      }, {
        "Id": 25444,
        "Text": "Trong Sprite Editor, khi click vào nút Slice ta có thể cắt ảnh theo mấy kiểu?",
        "Marks": 1,
        "AnswerId": 105397,
        "Answers": [{
          "Id": 105395,
          "Text": "3"
        }, {
          "Id": 105396,
          "Text": "4"
        }, {
          "Id": 105397,
          "Text": "2"
        }, {
          "Id": 105398,
          "Text": "5"
        }]
      }, {
        "Id": 25445,
        "Text": "Đâu là một đối tượng chứa các đối tượng con khác, gắn liền với nhau?",
        "Marks": 1,
        "AnswerId": 105399,
        "Answers": [{
          "Id": 105399,
          "Text": "Parent object"
        }, {
          "Id": 105400,
          "Text": "Empty Object"
        }, {
          "Id": 105401,
          "Text": "3D Object"
        }, {
          "Id": 105402,
          "Text": "Child object"
        }]
      }, {
        "Id": 25446,
        "Text": "Ta có thể tạo những đối tượng GameObject nào sau đây?",
        "Marks": 1,
        "AnswerId": 105403,
        "Answers": [{
          "Id": 105403,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105404,
          "Text": "UI"
        }, {
          "Id": 105405,
          "Text": "Light"
        }, {
          "Id": 105406,
          "Text": "Particle System"
        }]
      }, {
        "Id": 25447,
        "Text": "Thứ tự sử dụng nào sau đây đúng?",
        "Marks": 1,
        "AnswerId": 105409,
        "Answers": [{
          "Id": 105407,
          "Text": "GameObject=\u003eProperties=\u003eComponents"
        }, {
          "Id": 105408,
          "Text": "Properties=\u003eComponents=\u003eGameObject"
        }, {
          "Id": 105409,
          "Text": "GameObject=\u003eComponents=\u003eProperties"
        }, {
          "Id": 105410,
          "Text": "Components=\u003eGameObject=\u003eProperties"
        }]
      }, {
        "Id": 25448,
        "Text": "Trong Unity, đâu là một màn chơi riêng biệt hoặc một khu vực hay thành phần có trong nội dung của trò chơi?",
        "Marks": 1,
        "AnswerId": 105412,
        "Answers": [{
          "Id": 105411,
          "Text": "Assets"
        }, {
          "Id": 105412,
          "Text": "Scene"
        }, {
          "Id": 105413,
          "Text": "GameObject"
        }, {
          "Id": 105414,
          "Text": "Camera"
        }]
      }, {
        "Id": 25449,
        "Text": "Để thực tạo mới một dự án Game 2D ta phải làm bước sau?",
        "Marks": 1,
        "AnswerId": 105415,
        "Answers": [{
          "Id": 105415,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105416,
          "Text": "Nhập tên project"
        }, {
          "Id": 105417,
          "Text": "Chọn loại project 2D"
        }, {
          "Id": 105418,
          "Text": "Chọn đường dẫn lưu project"
        }]
      }, {
        "Id": 25450,
        "Text": "Thành phần transform có những thuộc tính nào sau đây?",
        "Marks": 1,
        "AnswerId": 105419,
        "Answers": [{
          "Id": 105419,
          "Text": "Position, rotation, scale"
        }, {
          "Id": 105420,
          "Text": "Rotation"
        }, {
          "Id": 105421,
          "Text": "Position"
        }, {
          "Id": 105422,
          "Text": "Scale"
        }]
      }, {
        "Id": 25451,
        "Text": "Trong Unity 2D có mấy loại Srite?",
        "Marks": 1,
        "AnswerId": 105426,
        "Answers": [{
          "Id": 105423,
          "Text": "1"
        }, {
          "Id": 105424,
          "Text": "3"
        }, {
          "Id": 105425,
          "Text": "4"
        }, {
          "Id": 105426,
          "Text": "2"
        }]
      }, {
        "Id": 25452,
        "Text": "Đâu không phải là Object đặc biệt trong Unity?",
        "Marks": 1,
        "AnswerId": 105429,
        "Answers": [{
          "Id": 105427,
          "Text": "Particle"
        }, {
          "Id": 105428,
          "Text": "Camera"
        }, {
          "Id": 105429,
          "Text": "Cube"
        }, {
          "Id": 105430,
          "Text": "Light"
        }]
      }, {
        "Id": 25453,
        "Text": "Đâu không phải là một Object cơ bản?",
        "Marks": 1,
        "AnswerId": 105432,
        "Answers": [{
          "Id": 105431,
          "Text": "Cube"
        }, {
          "Id": 105432,
          "Text": "Light"
        }, {
          "Id": 105433,
          "Text": "Plane"
        }, {
          "Id": 105434,
          "Text": "Sphere"
        }]
      }, {
        "Id": 25454,
        "Text": "Đâu không phải là một thành phần của Game Object?",
        "Marks": 1,
        "AnswerId": 105438,
        "Answers": [{
          "Id": 105435,
          "Text": "Collision"
        }, {
          "Id": 105436,
          "Text": "Physical"
        }, {
          "Id": 105437,
          "Text": "Script"
        }, {
          "Id": 105438,
          "Text": "Assets"
        }]
      }, {
        "Id": 25455,
        "Text": "Thuộc tính nào của GameObject để xác định và phân biệt các đối tượng với nhau, khi xử lý sự kiện...",
        "Marks": 1,
        "AnswerId": 105440,
        "Answers": [{
          "Id": 105439,
          "Text": "Light"
        }, {
          "Id": 105440,
          "Text": "Tag"
        }, {
          "Id": 105441,
          "Text": "Script"
        }, {
          "Id": 105442,
          "Text": "Camera"
        }]
      }, {
        "Id": 25456,
        "Text": "Khi mới tạo một đối tượng Empty GameObject, thông số component nào sẽ mặc định có sẵn?",
        "Marks": 1,
        "AnswerId": 105444,
        "Answers": [{
          "Id": 105443,
          "Text": "Script"
        }, {
          "Id": 105444,
          "Text": "Transform"
        }, {
          "Id": 105445,
          "Text": "Camera"
        }, {
          "Id": 105446,
          "Text": "Rigidbody2D"
        }]
      }, {
        "Id": 25457,
        "Text": "Trong Unity để sử dụng lại các đối tượng giống nhau có trong game bằng cách chỉ cần khởi tạo lại các giá trị vị trí, tỉ lệ biến dạng và góc quay từ một đối tượng ban đầu.",
        "Marks": 1,
        "AnswerId": 105448,
        "Answers": [{
          "Id": 105447,
          "Text": "Camera"
        }, {
          "Id": 105448,
          "Text": "Prefabs"
        }, {
          "Id": 105449,
          "Text": "Audio"
        }, {
          "Id": 105450,
          "Text": "Collision"
        }]
      }, {
        "Id": 25458,
        "Text": "Nếu ta muốn sử dụng trọn vẹn nội dung của bức ảnh cho một đối tượng game, ta nên chọn kiểu sprite?",
        "Marks": 1,
        "AnswerId": 105453,
        "Answers": [{
          "Id": 105451,
          "Text": "Multiple Sprite"
        }, {
          "Id": 105452,
          "Text": "Không đáp án nào đúng"
        }, {
          "Id": 105453,
          "Text": "Single Sprite"
        }, {
          "Id": 105454,
          "Text": "Single Sprite và Multiple Sprite"
        }]
      }, {
        "Id": 25459,
        "Text": "Với kiểu nào, Unity editor cắt ảnh theo dạng lưới là những ô hình chữ nhật với kích thước tuỳ chọn.",
        "Marks": 1,
        "AnswerId": 105456,
        "Answers": [{
          "Id": 105455,
          "Text": "Automatic"
        }, {
          "Id": 105456,
          "Text": "Grid"
        }, {
          "Id": 105457,
          "Text": "Không đáp án nào đúng"
        }, {
          "Id": 105458,
          "Text": "Grid và Automatic"
        }]
      }, {
        "Id": 25460,
        "Text": "Trong thuộc tính Update Mode có bao nhiêu giá trị để lựa chọn",
        "Marks": 1,
        "AnswerId": 105460,
        "Answers": [{
          "Id": 105459,
          "Text": "1"
        }, {
          "Id": 105460,
          "Text": "3"
        }, {
          "Id": 105461,
          "Text": "4"
        }, {
          "Id": 105462,
          "Text": "2"
        }]
      }, {
        "Id": 25461,
        "Text": "Trong thành phần Animator, thuộc tính nào định nghĩa xem animation có ảnh hưởng đến Transform của gameObject hay không và thường được sử dụng với các nhân vật 3D hình người",
        "Marks": 1,
        "AnswerId": 105466,
        "Answers": [{
          "Id": 105463,
          "Text": "Animate Physics"
        }, {
          "Id": 105464,
          "Text": "Avatar"
        }, {
          "Id": 105465,
          "Text": "Culling Mode"
        }, {
          "Id": 105466,
          "Text": "Apply Root Motion"
        }]
      }, {
        "Id": 25462,
        "Text": "Để thiết lập điều kiện cho một transition, ta click chọn transition đó, sau đó thiết lập giá trị của các tham số ở cửa sổ?",
        "Marks": 1,
        "AnswerId": 105468,
        "Answers": [{
          "Id": 105467,
          "Text": "Game"
        }, {
          "Id": 105468,
          "Text": "Inspector"
        }, {
          "Id": 105469,
          "Text": "Hierachy"
        }, {
          "Id": 105470,
          "Text": "Animator"
        }]
      }, {
        "Id": 25463,
        "Text": "Trong Animator components không có thuộc tính nào sau đây?",
        "Marks": 1,
        "AnswerId": 105474,
        "Answers": [{
          "Id": 105471,
          "Text": "Avatar"
        }, {
          "Id": 105472,
          "Text": "Update mode"
        }, {
          "Id": 105473,
          "Text": "Controller"
        }, {
          "Id": 105474,
          "Text": "Position"
        }]
      }, {
        "Id": 25464,
        "Text": "Các tham số Parameter có thể có những kiểu nào?",
        "Marks": 1,
        "AnswerId": 105477,
        "Answers": [{
          "Id": 105475,
          "Text": "Float, Int"
        }, {
          "Id": 105476,
          "Text": "Float, Int, Bool"
        }, {
          "Id": 105477,
          "Text": "Float, Int, Bool, Trigger"
        }, {
          "Id": 105478,
          "Text": "Bool, Trigger"
        }]
      }, {
        "Id": 25465,
        "Text": "Trong số kỹ thuật tạo animation, kỹ thuật nào người ta sẽ sử dụng một sprite cho một keyframe hành động?",
        "Marks": 1,
        "AnswerId": 105480,
        "Answers": [{
          "Id": 105479,
          "Text": "Cả hai kỹ thuật trên"
        }, {
          "Id": 105480,
          "Text": "Kỹ thuật Key Frame"
        }, {
          "Id": 105481,
          "Text": "Kỹ thuật Key Skeletal"
        }, {
          "Id": 105482,
          "Text": "Không kỹ thuật nào ở trên"
        }]
      }, {
        "Id": 25466,
        "Text": "Trong Animator components, thuộc tính nào trong Update mode khi được check có nghĩa là animations sẽ được thực thi trong thời gian vật lý (thường thì thuộc tính này được dùng cho đối tượng có rigidbody).",
        "Marks": 1,
        "AnswerId": 105485,
        "Answers": [{
          "Id": 105483,
          "Text": "Nomal"
        }, {
          "Id": 105484,
          "Text": "Unscaled Time"
        }, {
          "Id": 105485,
          "Text": "Animate Physics"
        }, {
          "Id": 105486,
          "Text": "Always Animate"
        }]
      }, {
        "Id": 25467,
        "Text": "Trong số kỹ thuật tạo animation, kỹ thuật nào sẽ tốn thời gian hơn, nhưng lại hiệu quả và đặc biệt là tiết kiệm thời gian hơn?",
        "Marks": 1,
        "AnswerId": 105490,
        "Answers": [{
          "Id": 105487,
          "Text": "Kỹ thuật Key Frame"
        }, {
          "Id": 105488,
          "Text": "Không kỹ thuật nào ở trên"
        }, {
          "Id": 105489,
          "Text": "Cả hai kỹ thuật trên"
        }, {
          "Id": 105490,
          "Text": "Kỹ thuật Key Skeletal"
        }]
      }, {
        "Id": 25468,
        "Text": "Khi tạo animation kỹ thuật nào được dùng để chia đối tượng ra thành nhiều sprite, mỗi sprite là một bộ phận của đối tượng (giống như 1 khúc xương của bộ xương).",
        "Marks": 1,
        "AnswerId": 105492,
        "Answers": [{
          "Id": 105491,
          "Text": "Single"
        }, {
          "Id": 105492,
          "Text": "Skeletal"
        }, {
          "Id": 105493,
          "Text": "Multiple"
        }, {
          "Id": 105494,
          "Text": "Key Frame"
        }]
      }, {
        "Id": 25469,
        "Text": "Trong những thuộc tính của Animator đâu là thuộc tính tạo bởi Unity chứa một hoặt nhiều trạng thái( state machines) dùng để chỉ định animation nào đang được chạy khi sence đang chạy, những trạng thái (state machines) này có thể nằm trên nhiều layers và sử",
        "Marks": 1,
        "AnswerId": 105498,
        "Answers": [{
          "Id": 105495,
          "Text": "Update mode"
        }, {
          "Id": 105496,
          "Text": "Culling Mode"
        }, {
          "Id": 105497,
          "Text": "Avatar"
        }, {
          "Id": 105498,
          "Text": "Controller"
        }]
      }, {
        "Id": 25470,
        "Text": "Có bao nhiêu bước để thực hiện kỹ thuật Key Frame?",
        "Marks": 1,
        "AnswerId": 105499,
        "Answers": [{
          "Id": 105499,
          "Text": "5"
        }, {
          "Id": 105500,
          "Text": "4"
        }, {
          "Id": 105501,
          "Text": "7"
        }, {
          "Id": 105502,
          "Text": "6"
        }]
      }, {
        "Id": 25471,
        "Text": "Một hình ảnh động mô tả một đối tượng nào đó trong game được gọi là?",
        "Marks": 1,
        "AnswerId": 105503,
        "Answers": [{
          "Id": 105503,
          "Text": "Animation"
        }, {
          "Id": 105504,
          "Text": "Sprite"
        }, {
          "Id": 105505,
          "Text": "Sound"
        }, {
          "Id": 105506,
          "Text": "Script"
        }]
      }, {
        "Id": 25472,
        "Text": "Trong thuộc tính Culling Mode có bao nhiêu giá trị để lựa chọn",
        "Marks": 1,
        "AnswerId": 105509,
        "Answers": [{
          "Id": 105507,
          "Text": "5"
        }, {
          "Id": 105508,
          "Text": "3"
        }, {
          "Id": 105509,
          "Text": "2"
        }, {
          "Id": 105510,
          "Text": "4"
        }]
      }, {
        "Id": 25473,
        "Text": "Có bao nhiêu kỹ thuật để tạo animation(cả 2D và 3D)",
        "Marks": 1,
        "AnswerId": 105513,
        "Answers": [{
          "Id": 105511,
          "Text": "4"
        }, {
          "Id": 105512,
          "Text": "3"
        }, {
          "Id": 105513,
          "Text": "2"
        }, {
          "Id": 105514,
          "Text": "5"
        }]
      }, {
        "Id": 25474,
        "Text": "Đâu là kỹ thuật tạo animation?",
        "Marks": 1,
        "AnswerId": 105516,
        "Answers": [{
          "Id": 105515,
          "Text": "Key Frame"
        }, {
          "Id": 105516,
          "Text": "Key Frame và Skeletal"
        }, {
          "Id": 105517,
          "Text": "Skeletal"
        }, {
          "Id": 105518,
          "Text": "Single và Multiple"
        }]
      }, {
        "Id": 25475,
        "Text": "Trong Animator components, thuộc tính nào trong Culling Mode khi được check có nghĩa là animations sẽ được chạy dù không render.",
        "Marks": 1,
        "AnswerId": 105520,
        "Answers": [{
          "Id": 105519,
          "Text": "Animate Physics"
        }, {
          "Id": 105520,
          "Text": "Always Animate"
        }, {
          "Id": 105521,
          "Text": "Nomal"
        }, {
          "Id": 105522,
          "Text": "Based On Renderens"
        }]
      }, {
        "Id": 25476,
        "Text": "Để xuất hiện cửa sổ Animator, ta thực hiện như sau:",
        "Marks": 1,
        "AnswerId": 105525,
        "Answers": [{
          "Id": 105523,
          "Text": "Menu-File-Animator"
        }, {
          "Id": 105524,
          "Text": "Menu- Assets- Animator"
        }, {
          "Id": 105525,
          "Text": "Menu-Window-Animator"
        }, {
          "Id": 105526,
          "Text": "Menu- Edit- Animator"
        }]
      }, {
        "Id": 25477,
        "Text": "Trong Animator components, thuộc tính nào trong Culling Mode chỉ định những animations chỉ được chạy khi chúng được render.",
        "Marks": 1,
        "AnswerId": 105530,
        "Answers": [{
          "Id": 105527,
          "Text": "Animate Physics"
        }, {
          "Id": 105528,
          "Text": "Always Animate"
        }, {
          "Id": 105529,
          "Text": "Nomal"
        }, {
          "Id": 105530,
          "Text": "Based On Renderens"
        }]
      }, {
        "Id": 25478,
        "Text": "Để tạo một clip cho animation ta tạo trong:",
        "Marks": 1,
        "AnswerId": 105532,
        "Answers": [{
          "Id": 105531,
          "Text": "Animator"
        }, {
          "Id": 105532,
          "Text": "Animation editor"
        }, {
          "Id": 105533,
          "Text": "Scene"
        }, {
          "Id": 105534,
          "Text": "Hierachy"
        }]
      }, {
        "Id": 25479,
        "Text": "Trong những giá trị sau, đâu không phải là giá trị lựa chọn của thuộc ính Update Mode",
        "Marks": 1,
        "AnswerId": 105538,
        "Answers": [{
          "Id": 105535,
          "Text": "Nomal"
        }, {
          "Id": 105536,
          "Text": "Animate Physics"
        }, {
          "Id": 105537,
          "Text": "Unscaled Time"
        }, {
          "Id": 105538,
          "Text": "Always Animate"
        }]
      }, {
        "Id": 25480,
        "Text": "Hàm nào được gọi khi muốn thoát khỏi Game",
        "Marks": 1,
        "AnswerId": 105541,
        "Answers": [{
          "Id": 105539,
          "Text": "OnDestroy"
        }, {
          "Id": 105540,
          "Text": "Update"
        }, {
          "Id": 105541,
          "Text": "OnApplicationQuit"
        }, {
          "Id": 105542,
          "Text": "FixedUpdate"
        }]
      }, {
        "Id": 25481,
        "Text": "Trong vòng đời của một script, thứ tự xảy ra các hàm như sau:",
        "Marks": 1,
        "AnswerId": 105544,
        "Answers": [{
          "Id": 105543,
          "Text": "Start() =\u003eWillRender =\u003e Update =\u003e OnDestroy"
        }, {
          "Id": 105544,
          "Text": "Start() =\u003e Update =\u003eWillRender =\u003e OnDestroy"
        }, {
          "Id": 105545,
          "Text": "Start() =\u003eWillRender =\u003e OnDestroy=\u003e Update"
        }, {
          "Id": 105546,
          "Text": "Start() =\u003eWillRender =\u003e Update =\u003e OnDestroy"
        }]
      }, {
        "Id": 25482,
        "Text": "Hàm nào được gọi 1 lần đầu tiên sau khi khởi tạo đối tượng, trước khi vào Update?",
        "Marks": 1,
        "AnswerId": 105547,
        "Answers": [{
          "Id": 105547,
          "Text": "Start()"
        }, {
          "Id": 105548,
          "Text": "OnDestroy()"
        }, {
          "Id": 105549,
          "Text": "OnWillRenderObject()"
        }, {
          "Id": 105550,
          "Text": "Update()"
        }]
      }, {
        "Id": 25483,
        "Text": "Để kiểm tra xem một phím được nhả ra, ta dùng hàm sau?",
        "Marks": 1,
        "AnswerId": 105553,
        "Answers": [{
          "Id": 105551,
          "Text": "Không đáp án nào đúng"
        }, {
          "Id": 105552,
          "Text": "GetKey(keyCode)"
        }, {
          "Id": 105553,
          "Text": "GetKeyUp(keyCode)"
        }, {
          "Id": 105554,
          "Text": "Input.GetKeyDown(keyCode)"
        }]
      }, {
        "Id": 25484,
        "Text": "Để kiểm tra xem một phím được bấm, ta dùng hàm sau?",
        "Marks": 1,
        "AnswerId": 105556,
        "Answers": [{
          "Id": 105555,
          "Text": "GetKey(keyCode)"
        }, {
          "Id": 105556,
          "Text": "Input.GetKeyDown(keyCode)"
        }, {
          "Id": 105557,
          "Text": "GetKeyUp(keyCode)"
        }, {
          "Id": 105558,
          "Text": "Không đáp án nào đúng"
        }]
      }, {
        "Id": 25485,
        "Text": "Để kiểm tra xem con chuột được thả ta dùng hàm sau?",
        "Marks": 1,
        "AnswerId": 105562,
        "Answers": [{
          "Id": 105559,
          "Text": "OnMouseDown, OnMouseUp, OnMouseDrag"
        }, {
          "Id": 105560,
          "Text": "OnMouseDown"
        }, {
          "Id": 105561,
          "Text": "OnMouseDrag"
        }, {
          "Id": 105562,
          "Text": "OnMouseUp"
        }]
      }, {
        "Id": 25486,
        "Text": "Để tạo ra các bản sao nhanh của một đối tượng mà không cần thiết lập lại các giá trị khởi tạo của một đối tượng nào đó ngoài trừ các giá trị transform (vị trí, tỉ lệ, quay) ta dùng?",
        "Marks": 1,
        "AnswerId": 105566,
        "Answers": [{
          "Id": 105563,
          "Text": "Sound"
        }, {
          "Id": 105564,
          "Text": "Scene"
        }, {
          "Id": 105565,
          "Text": "Script"
        }, {
          "Id": 105566,
          "Text": "Prefabs"
        }]
      }, {
        "Id": 25487,
        "Text": "Hàm nào được gọi liên tục sau mỗi frame, sau Start?",
        "Marks": 1,
        "AnswerId": 105570,
        "Answers": [{
          "Id": 105567,
          "Text": "Start()"
        }, {
          "Id": 105568,
          "Text": "OnWillRenderObject()"
        }, {
          "Id": 105569,
          "Text": "OnDestroy()"
        }, {
          "Id": 105570,
          "Text": "Update()"
        }]
      }, {
        "Id": 25488,
        "Text": "Để kiểm tra xem con chuột đang được bấm ta dùng hàm sau?",
        "Marks": 1,
        "AnswerId": 105572,
        "Answers": [{
          "Id": 105571,
          "Text": "OnMouseDrag"
        }, {
          "Id": 105572,
          "Text": "OnMouseDown"
        }, {
          "Id": 105573,
          "Text": "OnMouseUp"
        }, {
          "Id": 105574,
          "Text": "OnMouseDown, OnMouseUp, OnMouseDrag"
        }]
      }, {
        "Id": 25489,
        "Text": "Để tạo một Script ta thực hiện như sau?",
        "Marks": 1,
        "AnswerId": 105577,
        "Answers": [{
          "Id": 105575,
          "Text": "Create- Javascript"
        }, {
          "Id": 105576,
          "Text": "Create- Boo Scrilpt"
        }, {
          "Id": 105577,
          "Text": "Cả ba đáp án trên."
        }, {
          "Id": 105578,
          "Text": "Create- C# Script"
        }]
      }, {
        "Id": 25490,
        "Text": "Hàm sau đây, hàm nào dùng để xử lý sự kiện liên quan đến chuột?",
        "Marks": 1,
        "AnswerId": 105582,
        "Answers": [{
          "Id": 105579,
          "Text": "OnMouseUp"
        }, {
          "Id": 105580,
          "Text": "OnMouseDown"
        }, {
          "Id": 105581,
          "Text": "OnMouseDrag"
        }, {
          "Id": 105582,
          "Text": "OnMouseDown, OnMouseUp, OnMouseDrag"
        }]
      }, {
        "Id": 25491,
        "Text": "Hàm nào trả về giá trị số thực trong khoảng -1..1 nếu có sự kiện các key up hoặc down được bấm (key dọc).",
        "Marks": 1,
        "AnswerId": 105584,
        "Answers": [{
          "Id": 105583,
          "Text": "Input.GetAxis (\"Horizontal\")"
        }, {
          "Id": 105584,
          "Text": "Input.GetAxis (\"Vertical\")"
        }, {
          "Id": 105585,
          "Text": "Input.Get (\"Vertical\")"
        }, {
          "Id": 105586,
          "Text": "Input.Get(\"Horizontal\")"
        }]
      }, {
        "Id": 25492,
        "Text": "Để tạo một prefab trong quá trình thực thi game, ta dùng hàm nào",
        "Marks": 1,
        "AnswerId": 105587,
        "Answers": [{
          "Id": 105587,
          "Text": "Instantiate(gameObject, Vector3, Quaternion)"
        }, {
          "Id": 105588,
          "Text": "gameObject.GetComponent()"
        }, {
          "Id": 105589,
          "Text": "Input.GetAxis (\"Horizontal\")"
        }, {
          "Id": 105590,
          "Text": "this.gameObject"
        }]
      }, {
        "Id": 25493,
        "Text": "Hàm nào luôn chạy khi một scene bắt đầu, và đối với các đội tượng được tạo ra trong lúc đã load scene thì ko nên dùng hàm này?",
        "Marks": 1,
        "AnswerId": 105593,
        "Answers": [{
          "Id": 105591,
          "Text": "Start"
        }, {
          "Id": 105592,
          "Text": "Update"
        }, {
          "Id": 105593,
          "Text": "Awake"
        }, {
          "Id": 105594,
          "Text": "OnDestroy"
        }]
      }, {
        "Id": 25494,
        "Text": "Hàm nào được gọi Được gọi khi đối tượng bị huỷ?",
        "Marks": 1,
        "AnswerId": 105598,
        "Answers": [{
          "Id": 105595,
          "Text": "Start()"
        }, {
          "Id": 105596,
          "Text": "Update()"
        }, {
          "Id": 105597,
          "Text": "OnWillRenderObject()"
        }, {
          "Id": 105598,
          "Text": "OnDestroy()"
        }]
      }, {
        "Id": 25495,
        "Text": "Để kiểm tra xem một phím được giữ ta dùng hàm sau?",
        "Marks": 1,
        "AnswerId": 105601,
        "Answers": [{
          "Id": 105599,
          "Text": "Input.GetKeyDown(keyCode)"
        }, {
          "Id": 105600,
          "Text": "GetKeyUp(keyCode)"
        }, {
          "Id": 105601,
          "Text": "GetKey(keyCode)"
        }, {
          "Id": 105602,
          "Text": "Không đáp án nào đúng"
        }]
      }, {
        "Id": 25496,
        "Text": "Hàm nào trả về giá trị số thực trong khoảng -1..1 nếu có sự kiện các key right hoặc left được bấm (key ngang).",
        "Marks": 1,
        "AnswerId": 105606,
        "Answers": [{
          "Id": 105603,
          "Text": "Input.Get(\"Horizontal\")"
        }, {
          "Id": 105604,
          "Text": "Input.GetAxis (\"Vertical\")"
        }, {
          "Id": 105605,
          "Text": "Input.Get (\"Vertical\")"
        }, {
          "Id": 105606,
          "Text": "Input.GetAxis (\"Horizontal\")"
        }]
      }, {
        "Id": 25497,
        "Text": "Để chỉ định script cho một đối tượng nào đó, ta chỉ cần chọn vào đối tượng, sau đó chọn:",
        "Marks": 1,
        "AnswerId": 105609,
        "Answers": [{
          "Id": 105607,
          "Text": "Inspector/Script/chọn file script"
        }, {
          "Id": 105608,
          "Text": "Menu/Script/Chọn file script"
        }, {
          "Id": 105609,
          "Text": "Inspector/Add Component/Script/chọn file script"
        }, {
          "Id": 105610,
          "Text": "Menu/Component/Script/Chọn file script"
        }]
      }, {
        "Id": 25498,
        "Text": "Một Component dùng để chứa các mã điều khiển cho một đối tượng nào đó trong Game, được viết bằng C#, JavaScript hay Boo gọi là?",
        "Marks": 1,
        "AnswerId": 105612,
        "Answers": [{
          "Id": 105611,
          "Text": "Prefabs"
        }, {
          "Id": 105612,
          "Text": "Script"
        }, {
          "Id": 105613,
          "Text": "Scene"
        }, {
          "Id": 105614,
          "Text": "Sound"
        }]
      }, {
        "Id": 25499,
        "Text": "Để kiểm tra xem con chuột được kéo ta dùng hàm sau?",
        "Marks": 1,
        "AnswerId": 105618,
        "Answers": [{
          "Id": 105615,
          "Text": "OnMouseDown, OnMouseUp, OnMouseDrag"
        }, {
          "Id": 105616,
          "Text": "OnMouseUp"
        }, {
          "Id": 105617,
          "Text": "OnMouseDown"
        }, {
          "Id": 105618,
          "Text": "OnMouseDrag"
        }]
      }, {
        "Id": 25500,
        "Text": "Trong môi trường 3D, thông số nào sau đây không phải là thông số của Collider?",
        "Marks": 1,
        "AnswerId": 105621,
        "Answers": [{
          "Id": 105619,
          "Text": "Material"
        }, {
          "Id": 105620,
          "Text": "Is Trigger"
        }, {
          "Id": 105621,
          "Text": "Radius"
        }, {
          "Id": 105622,
          "Text": "Center"
        }]
      }, {
        "Id": 25501,
        "Text": "Để quản lý về độ ma sát trượt, ma sát lăn, gia tốc trọng trường…Object cung cấp thành phần nào?",
        "Marks": 1,
        "AnswerId": 105626,
        "Answers": [{
          "Id": 105623,
          "Text": "Box Collider"
        }, {
          "Id": 105624,
          "Text": "Mesh Collider"
        }, {
          "Id": 105625,
          "Text": "Terrain Collider"
        }, {
          "Id": 105626,
          "Text": "Rigidbody2D"
        }]
      }, {
        "Id": 25502,
        "Text": "Thuộc tính Interpolate trong thành phần Rigidbody 2D có mấy giá trị?",
        "Marks": 1,
        "AnswerId": 105629,
        "Answers": [{
          "Id": 105627,
          "Text": "4"
        }, {
          "Id": 105628,
          "Text": "2"
        }, {
          "Id": 105629,
          "Text": "3"
        }, {
          "Id": 105630,
          "Text": "1"
        }]
      }, {
        "Id": 25503,
        "Text": "Thông số nào trong thành phần Collider (môi trường 2D) xác định loại va chạm là trigger hay collision?",
        "Marks": 1,
        "AnswerId": 105632,
        "Answers": [{
          "Id": 105631,
          "Text": "Material"
        }, {
          "Id": 105632,
          "Text": "Is Trigger"
        }, {
          "Id": 105633,
          "Text": "Used By Effector"
        }, {
          "Id": 105634,
          "Text": "Offset"
        }]
      }, {
        "Id": 25504,
        "Text": "Trong môi trường 3D, thông số nào sau đây xác định bề mặt va chạm đề tạo hiệu ứng vật lý,  ví dụ như hiệu ứng đàn hồi cần bề mặt đàn hồi...?",
        "Marks": 1,
        "AnswerId": 105637,
        "Answers": [{
          "Id": 105635,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 105636,
          "Text": "Is Trigger"
        }, {
          "Id": 105637,
          "Text": "Material"
        }, {
          "Id": 105638,
          "Text": "Center"
        }]
      }, {
        "Id": 25505,
        "Text": "Kiểu Collider nào trong môi trường 3D mà không gian va chạm bao quanh Object là môt khối hình vuông?",
        "Marks": 1,
        "AnswerId": 105641,
        "Answers": [{
          "Id": 105639,
          "Text": "Capsule Collider"
        }, {
          "Id": 105640,
          "Text": "Wheel Collider"
        }, {
          "Id": 105641,
          "Text": "Box Collider"
        }, {
          "Id": 105642,
          "Text": "Sphere Collider"
        }]
      }, {
        "Id": 25506,
        "Text": "Hàm nào sau đây thường dùng khi viết code xử ý va chạm?",
        "Marks": 1,
        "AnswerId": 105643,
        "Answers": [{
          "Id": 105643,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105644,
          "Text": "OnTriggerEnter"
        }, {
          "Id": 105645,
          "Text": "OnTriggerExit"
        }, {
          "Id": 105646,
          "Text": "OnCollisionEnter"
        }]
      }, {
        "Id": 25507,
        "Text": "Kiểu Collider nào trong môi trường 3D mà không gian va chạm bao quanh Object là môt khối hình dạng tương ứng với hình dạng của vật thể?",
        "Marks": 1,
        "AnswerId": 105647,
        "Answers": [{
          "Id": 105647,
          "Text": "Mesh Collider"
        }, {
          "Id": 105648,
          "Text": "Terrain Collider"
        }, {
          "Id": 105649,
          "Text": "Box Collider"
        }, {
          "Id": 105650,
          "Text": "Wheel Collider"
        }]
      }, {
        "Id": 25508,
        "Text": "Trong thành phần Rigidbody2D, thuộc tính nào để giá trị nào quy định cách một Object dừng lại(chậm dần, rung…)",
        "Marks": 1,
        "AnswerId": 105651,
        "Answers": [{
          "Id": 105651,
          "Text": "Sleeping mode"
        }, {
          "Id": 105652,
          "Text": "Interpolate"
        }, {
          "Id": 105653,
          "Text": "Is Kinematic"
        }, {
          "Id": 105654,
          "Text": "Collision Detection"
        }]
      }, {
        "Id": 25509,
        "Text": "Hàm sự kiện ứng với va chạm loại trigger, khi hai Collider thuộc loại trigger bắt đầu va chạm, hay nói cách khác là collider của object này đi vào collider của object kia là?",
        "Marks": 1,
        "AnswerId": 105657,
        "Answers": [{
          "Id": 105655,
          "Text": "FixedUpdate"
        }, {
          "Id": 105656,
          "Text": "OnCollisionEnter"
        }, {
          "Id": 105657,
          "Text": "OnTriggerEnter"
        }, {
          "Id": 105658,
          "Text": "OnTriggerExit"
        }]
      }, {
        "Id": 25510,
        "Text": "Collider trong môi trường 2D, thông số nào sau đây không đúng?",
        "Marks": 1,
        "AnswerId": 105661,
        "Answers": [{
          "Id": 105659,
          "Text": "Material"
        }, {
          "Id": 105660,
          "Text": "Radius"
        }, {
          "Id": 105661,
          "Text": "Gravity Scale"
        }, {
          "Id": 105662,
          "Text": "Is Trigger"
        }]
      }, {
        "Id": 25511,
        "Text": "Trong thành phần Rigidbody2D, thuộc tính nào xác định Mức độ ảnh hưởng của trọng lực lên Object ?",
        "Marks": 1,
        "AnswerId": 105663,
        "Answers": [{
          "Id": 105663,
          "Text": "Gravity Scale"
        }, {
          "Id": 105664,
          "Text": "Mass"
        }, {
          "Id": 105665,
          "Text": "Linear Drag"
        }, {
          "Id": 105666,
          "Text": "Angular Drag"
        }]
      }, {
        "Id": 25512,
        "Text": "Trong thành phần Rigidbody2D, thuộc tính nào để làm cho Object sẽ không chịu ảnh hưởng của trọng lực cũng như các lực tác động lên nó?",
        "Marks": 1,
        "AnswerId": 105668,
        "Answers": [{
          "Id": 105667,
          "Text": "Fixed Angle"
        }, {
          "Id": 105668,
          "Text": "Is Kinematic"
        }, {
          "Id": 105669,
          "Text": "Angular Drag"
        }, {
          "Id": 105670,
          "Text": "Mass"
        }]
      }, {
        "Id": 25513,
        "Text": "Trong thành phần Rigidbody2D, thuộc tính nào xác định sức cản không khi khi vật di chuyển?",
        "Marks": 1,
        "AnswerId": 105673,
        "Answers": [{
          "Id": 105671,
          "Text": "Gravity Scale"
        }, {
          "Id": 105672,
          "Text": "Mass"
        }, {
          "Id": 105673,
          "Text": "Linear Drag"
        }, {
          "Id": 105674,
          "Text": "Angular Drag"
        }]
      }, {
        "Id": 25514,
        "Text": "Trong thành phần Rigidbody2D, thuộc tính nào xác định đối tượng xoay khi tác bị tác dụng của một lực moment xoay ?",
        "Marks": 1,
        "AnswerId": 105678,
        "Answers": [{
          "Id": 105675,
          "Text": "Is Kinematic"
        }, {
          "Id": 105676,
          "Text": "Angular Drag"
        }, {
          "Id": 105677,
          "Text": "Mass"
        }, {
          "Id": 105678,
          "Text": "Fixed Angle"
        }]
      }, {
        "Id": 25515,
        "Text": "Khi vào Menu-Component-Physics, ta có thể chọn được bao nhiêu kiểu Collider?",
        "Marks": 1,
        "AnswerId": 105680,
        "Answers": [{
          "Id": 105679,
          "Text": "4"
        }, {
          "Id": 105680,
          "Text": "6"
        }, {
          "Id": 105681,
          "Text": "5"
        }, {
          "Id": 105682,
          "Text": "7"
        }]
      }, {
        "Id": 25516,
        "Text": "Để thực hiện va chạm mà 2 đối tượng sẽ không đi xuyên qua nhau, khi đối tượng này gặp đối tượng kia thì sẽ bị cản lại, bật lại tùy theo tính chất vật lý mà chúng ta xét cho đối tượng. Ví dụ : quả bóng rơi từ trên cao rơi xuống sân cỏ sẽ bật lên …ta sử dụn",
        "Marks": 1,
        "AnswerId": 105684,
        "Answers": [{
          "Id": 105683,
          "Text": "Trigger"
        }, {
          "Id": 105684,
          "Text": "Collision"
        }, {
          "Id": 105685,
          "Text": "Không phải loại trên."
        }, {
          "Id": 105686,
          "Text": "Collision và Trigger"
        }]
      }, {
        "Id": 25517,
        "Text": "Trong Unity có mấy loại va chạm?",
        "Marks": 1,
        "AnswerId": 105689,
        "Answers": [{
          "Id": 105687,
          "Text": "5"
        }, {
          "Id": 105688,
          "Text": "3"
        }, {
          "Id": 105689,
          "Text": "2"
        }, {
          "Id": 105690,
          "Text": "4"
        }]
      }, {
        "Id": 25518,
        "Text": "Khi vào Physics 2D, kiểu Collider nào mà không gian va chạm bao quanh Object là dạng hình tròn?",
        "Marks": 1,
        "AnswerId": 105693,
        "Answers": [{
          "Id": 105691,
          "Text": "Box Collider"
        }, {
          "Id": 105692,
          "Text": "Edge Collider"
        }, {
          "Id": 105693,
          "Text": "Circle Collider"
        }, {
          "Id": 105694,
          "Text": "Polygon Collider."
        }]
      }, {
        "Id": 25519,
        "Text": "Khi vào Menu-Component-Physics 2D, ta có thể chọn được bao nhiêu kiểu Collider?",
        "Marks": 1,
        "AnswerId": 105696,
        "Answers": [{
          "Id": 105695,
          "Text": "2"
        }, {
          "Id": 105696,
          "Text": "4"
        }, {
          "Id": 105697,
          "Text": "5"
        }, {
          "Id": 105698,
          "Text": "3"
        }]
      }, {
        "Id": 25520,
        "Text": "Thuộc tính Rect Transform có những yếu tố sau?",
        "Marks": 1,
        "AnswerId": 105702,
        "Answers": [{
          "Id": 105699,
          "Text": "Anchor"
        }, {
          "Id": 105700,
          "Text": "Pivot"
        }, {
          "Id": 105701,
          "Text": "Position"
        }, {
          "Id": 105702,
          "Text": "Tất cả các phương án đều đúng"
        }]
      }, {
        "Id": 25521,
        "Text": "Giá trị Transition Mode của thuộc tính Button Script gồm mấy tùy chọn?",
        "Marks": 1,
        "AnswerId": 105705,
        "Answers": [{
          "Id": 105703,
          "Text": "5"
        }, {
          "Id": 105704,
          "Text": "2"
        }, {
          "Id": 105705,
          "Text": "4"
        }, {
          "Id": 105706,
          "Text": "3"
        }]
      }, {
        "Id": 25522,
        "Text": "Trong đối tượng thiết kế UI, có thể tạo những thành phần nào sau đây?",
        "Marks": 1,
        "AnswerId": 105710,
        "Answers": [{
          "Id": 105707,
          "Text": "Image"
        }, {
          "Id": 105708,
          "Text": "Text"
        }, {
          "Id": 105709,
          "Text": "Button"
        }, {
          "Id": 105710,
          "Text": "Tất cả các phương án đều đúng"
        }]
      }, {
        "Id": 25523,
        "Text": "Thuộc tính nào của Canvas hỗ trợ bắt sự kiện",
        "Marks": 1,
        "AnswerId": 105713,
        "Answers": [{
          "Id": 105711,
          "Text": "Render Mode"
        }, {
          "Id": 105712,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105713,
          "Text": "Graphic Raycast"
        }, {
          "Id": 105714,
          "Text": "Rect Transform"
        }]
      }, {
        "Id": 25524,
        "Text": "Trong thiết kế UI, thành phần Text sử dụng thuộc tính nào để tự động điều chỉnh kích thước font chữ phù hợp.",
        "Marks": 1,
        "AnswerId": 105717,
        "Answers": [{
          "Id": 105715,
          "Text": "Line Spacing"
        }, {
          "Id": 105716,
          "Text": "Font Size"
        }, {
          "Id": 105717,
          "Text": "Best Fit"
        }, {
          "Id": 105718,
          "Text": "Alignment"
        }]
      }, {
        "Id": 25525,
        "Text": "Thuộc tính Transition của đối tượng Scroll Bar có những chế độ chuyển tiếp nào?",
        "Marks": 1,
        "AnswerId": 105719,
        "Answers": [{
          "Id": 105719,
          "Text": "Animation, Sprit Swap,Color Tint,None"
        }, {
          "Id": 105720,
          "Text": "Color Tint, Sprit Swap"
        }, {
          "Id": 105721,
          "Text": "None, Sprit Swap"
        }, {
          "Id": 105722,
          "Text": "Sprit Swap"
        }]
      }, {
        "Id": 25526,
        "Text": "Đâu không phải là thuộc tính của một component Image?",
        "Marks": 1,
        "AnswerId": 105726,
        "Answers": [{
          "Id": 105723,
          "Text": "Material"
        }, {
          "Id": 105724,
          "Text": "Source Image"
        }, {
          "Id": 105725,
          "Text": "Color"
        }, {
          "Id": 105726,
          "Text": "Position"
        }]
      }, {
        "Id": 25527,
        "Text": "Ở Button Script của UI Button, để xử lý sự kiện khi click nút button ta sử dụng thành phần?",
        "Marks": 1,
        "AnswerId": 105730,
        "Answers": [{
          "Id": 105727,
          "Text": "Navigation"
        }, {
          "Id": 105728,
          "Text": "Transition"
        }, {
          "Id": 105729,
          "Text": "Interactable"
        }, {
          "Id": 105730,
          "Text": "On Click(Button)"
        }]
      }, {
        "Id": 25528,
        "Text": "Ở thuộc tính Button Script của UI Button, khi chọn giá trị mặc định của Transition mode là ColorTint, ta có thể tác động bao nhiêu thông số giá trị?",
        "Marks": 1,
        "AnswerId": 105731,
        "Answers": [{
          "Id": 105731,
          "Text": "7"
        }, {
          "Id": 105732,
          "Text": "6"
        }, {
          "Id": 105733,
          "Text": "8"
        }, {
          "Id": 105734,
          "Text": "5"
        }]
      }, {
        "Id": 25529,
        "Text": "Trên thành phần Rect Transform (khi thết kế UI) thuộc tính nào là điểm trụ của object, nếu bạn xoay UI thì nó sẽ xoay quanh điểm tâm.",
        "Marks": 1,
        "AnswerId": 105736,
        "Answers": [{
          "Id": 105735,
          "Text": "Rotation"
        }, {
          "Id": 105736,
          "Text": "Pivot"
        }, {
          "Id": 105737,
          "Text": "Scale"
        }, {
          "Id": 105738,
          "Text": "Anchor"
        }]
      }, {
        "Id": 25530,
        "Text": "Trong thành phần Canvas, thuộc tính Render mode có bao nhiêu tùy chọn hiển thị cho canvas?",
        "Marks": 1,
        "AnswerId": 105739,
        "Answers": [{
          "Id": 105739,
          "Text": "4"
        }, {
          "Id": 105740,
          "Text": "5"
        }, {
          "Id": 105741,
          "Text": "3"
        }, {
          "Id": 105742,
          "Text": "2"
        }]
      }, {
        "Id": 25531,
        "Text": "Để cho phép người dùng di chuyển một hình ảnh hay một khung nhìn nào đó mà kích thước nội dung của nó khá lớn vượt ra ngoài tầm khung nhìn, không thể xem hoàn, ta sử dụng đối tượng UI nào?",
        "Marks": 1,
        "AnswerId": 105746,
        "Answers": [{
          "Id": 105743,
          "Text": "Button"
        }, {
          "Id": 105744,
          "Text": "Text"
        }, {
          "Id": 105745,
          "Text": "Image"
        }, {
          "Id": 105746,
          "Text": "Scroll Bar"
        }]
      }, {
        "Id": 25532,
        "Text": "Trên thành phần Rect Transform (khi thết kế UI) thuộc tính nào dùng để căn chỉnh tỷ lệ của một đối tượng trong Scene?",
        "Marks": 1,
        "AnswerId": 105749,
        "Answers": [{
          "Id": 105747,
          "Text": "Anchor"
        }, {
          "Id": 105748,
          "Text": "Position"
        }, {
          "Id": 105749,
          "Text": "Scale"
        }, {
          "Id": 105750,
          "Text": "Rotation"
        }]
      }, {
        "Id": 25533,
        "Text": "Đối với các tuỳ chọn Render mode nào, thành phần Rect Transform sẽ được khoá lại và không thể tuỳ chỉnh?",
        "Marks": 1,
        "AnswerId": 105751,
        "Answers": [{
          "Id": 105751,
          "Text": "Screen Space- Overlay và Screen Space- Camera"
        }, {
          "Id": 105752,
          "Text": "Screen Space- Camera"
        }, {
          "Id": 105753,
          "Text": "Screen Space- Overlay"
        }, {
          "Id": 105754,
          "Text": "World Space"
        }]
      }, {
        "Id": 25534,
        "Text": "Các thành phần chính trong một đối tượng UI Button?",
        "Marks": 1,
        "AnswerId": 105758,
        "Answers": [{
          "Id": 105755,
          "Text": "Rect Transform"
        }, {
          "Id": 105756,
          "Text": "Button Script"
        }, {
          "Id": 105757,
          "Text": "Image Script"
        }, {
          "Id": 105758,
          "Text": "Tất cả các phương án đều đúng"
        }]
      }, {
        "Id": 25535,
        "Text": "Để tạo một đối tượng Image ta thực hiện như sau:",
        "Marks": 1,
        "AnswerId": 105762,
        "Answers": [{
          "Id": 105759,
          "Text": "Menu- GameObject-Image"
        }, {
          "Id": 105760,
          "Text": "Menu- UI-Image"
        }, {
          "Id": 105761,
          "Text": "Menu- Component- UI-Image"
        }, {
          "Id": 105762,
          "Text": "Menu- GameObject- UI-Image"
        }]
      }, {
        "Id": 25536,
        "Text": "Thuộc tính Image Type của UI Image có những loại nào sau đây?",
        "Marks": 1,
        "AnswerId": 105766,
        "Answers": [{
          "Id": 105763,
          "Text": "Sliced và Title"
        }, {
          "Id": 105764,
          "Text": "Title và Fill"
        }, {
          "Id": 105765,
          "Text": "Simple và Sliced"
        }, {
          "Id": 105766,
          "Text": "Simple, Sliced, Title và Fill"
        }]
      }, {
        "Id": 25537,
        "Text": "Để Canvas sẽ được vẽ lên layer cao nhất của màn hình và nằm trên mọi game object khác và Canvas này hoàn toàn không phụ thuộc vào camera ta chọn Render mode nào?",
        "Marks": 1,
        "AnswerId": 105769,
        "Answers": [{
          "Id": 105767,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105768,
          "Text": "World Space"
        }, {
          "Id": 105769,
          "Text": "Screen Space- Overlay"
        }, {
          "Id": 105770,
          "Text": "Screen Space- Camera"
        }]
      }, {
        "Id": 25538,
        "Text": "Trong UI Scroll bar, để cho phép sử dụng thành phần này hay không ta sử dụng thuộc tính?",
        "Marks": 1,
        "AnswerId": 105774,
        "Answers": [{
          "Id": 105771,
          "Text": "Transition"
        }, {
          "Id": 105772,
          "Text": "Navigation"
        }, {
          "Id": 105773,
          "Text": "Handle Rect"
        }, {
          "Id": 105774,
          "Text": "Interactable"
        }]
      }, {
        "Id": 25539,
        "Text": "Thuộc tính nào của UI Image tham chiếu đến sprite để hiển thị hình ảnh?",
        "Marks": 1,
        "AnswerId": 105777,
        "Answers": [{
          "Id": 105775,
          "Text": "Material"
        }, {
          "Id": 105776,
          "Text": "Image Type"
        }, {
          "Id": 105777,
          "Text": "Source Image"
        }, {
          "Id": 105778,
          "Text": "Color"
        }]
      }, {
        "Id": 25540,
        "Text": "Kỹ thuật tạo ra các hiệu ứng cháy nổ hay sương, khói... trong game được tạo từ đối tượng nào?",
        "Marks": 1,
        "AnswerId": 105781,
        "Answers": [{
          "Id": 105779,
          "Text": "Camera"
        }, {
          "Id": 105780,
          "Text": "Audio"
        }, {
          "Id": 105781,
          "Text": "Particle System"
        }, {
          "Id": 105782,
          "Text": "Light"
        }]
      }, {
        "Id": 25541,
        "Text": "Trong những thuộc tính sau, đâu là thuộc tính của thành phần Particle System?",
        "Marks": 1,
        "AnswerId": 105786,
        "Answers": [{
          "Id": 105783,
          "Text": "Duration"
        }, {
          "Id": 105784,
          "Text": "Prewarm"
        }, {
          "Id": 105785,
          "Text": "Looping"
        }, {
          "Id": 105786,
          "Text": "Duration, Looping, Prewarm"
        }]
      }, {
        "Id": 25542,
        "Text": "Thuộc tính nào của thành phần Camera chỉ chiều rộng của góc nhìn Camera. Được đo bằng độ dọc theo trục Local Y.?",
        "Marks": 1,
        "AnswerId": 105788,
        "Answers": [{
          "Id": 105787,
          "Text": "Size"
        }, {
          "Id": 105788,
          "Text": "Fiel of View"
        }, {
          "Id": 105789,
          "Text": "Clear Flags"
        }, {
          "Id": 105790,
          "Text": "Background"
        }]
      }, {
        "Id": 25543,
        "Text": "Để sử dụng các đối tượng Particle có sẵn, ta thực hiện bước sau:",
        "Marks": 1,
        "AnswerId": 105791,
        "Answers": [{
          "Id": 105791,
          "Text": "Menu- Assets- Import Pakage- Particle"
        }, {
          "Id": 105792,
          "Text": "Menu- Assets- Import New Asset- Particle"
        }, {
          "Id": 105793,
          "Text": "Menu- Assets- Imort- Particle"
        }, {
          "Id": 105794,
          "Text": "Menu- Assets- Import Asset- Particle"
        }]
      }, {
        "Id": 25544,
        "Text": "Thuộc tính nào của thành phần Sound cho phép chọn file âm thanh sử dụng cho Scene?",
        "Marks": 1,
        "AnswerId": 105796,
        "Answers": [{
          "Id": 105795,
          "Text": "Bypass Effects"
        }, {
          "Id": 105796,
          "Text": "Audio Clip"
        }, {
          "Id": 105797,
          "Text": "Priority"
        }, {
          "Id": 105798,
          "Text": "Mute"
        }]
      }, {
        "Id": 25545,
        "Text": "Thuộc tính nào của thành phần Sound dùng thay đổi tốc độ của âm thanh?",
        "Marks": 1,
        "AnswerId": 105802,
        "Answers": [{
          "Id": 105799,
          "Text": "Mute"
        }, {
          "Id": 105800,
          "Text": "Priority"
        }, {
          "Id": 105801,
          "Text": "Spread"
        }, {
          "Id": 105802,
          "Text": "Pitch"
        }]
      }, {
        "Id": 25546,
        "Text": "Để tạo một Scene mới, ta thực hiện như sau?",
        "Marks": 1,
        "AnswerId": 105803,
        "Answers": [{
          "Id": 105803,
          "Text": "Menu-File- New Scene"
        }, {
          "Id": 105804,
          "Text": "Menu- GameObject- New Scene"
        }, {
          "Id": 105805,
          "Text": "Menu- Component- New Scene"
        }, {
          "Id": 105806,
          "Text": "Menu- Assets- New Scene"
        }]
      }, {
        "Id": 25547,
        "Text": "Để Buil một Scene mới tạo ta vào:",
        "Marks": 1,
        "AnswerId": 105809,
        "Answers": [{
          "Id": 105807,
          "Text": "Menu-File- Build Setting"
        }, {
          "Id": 105808,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 105809,
          "Text": "Cả hai đáp án trên"
        }, {
          "Id": 105810,
          "Text": "Menu-File- Buil Run"
        }]
      }, {
        "Id": 25548,
        "Text": "Thuộc tính nào của thành phần Sound: nếu enable, âm thanh sẽ được chạy ngay khi ra mắt Scene. Nếu để Disable, khi cần chạy âm thanh chúng ta phải gọi phương thức/chức năng Play() từ Script.?",
        "Marks": 1,
        "AnswerId": 105814,
        "Answers": [{
          "Id": 105811,
          "Text": "Priority"
        }, {
          "Id": 105812,
          "Text": "Volumn"
        }, {
          "Id": 105813,
          "Text": "Pitch"
        }, {
          "Id": 105814,
          "Text": "Play on Wake"
        }]
      }, {
        "Id": 25549,
        "Text": "Để chuyển đổi màn chơi, ta dùng hàm sau:",
        "Marks": 1,
        "AnswerId": 105817,
        "Answers": [{
          "Id": 105815,
          "Text": "Application.Set(\"GameOver\");"
        }, {
          "Id": 105816,
          "Text": "Application.SetLevel(\"GameOver\");"
        }, {
          "Id": 105817,
          "Text": "Application.LoadLevel(\"GameOver\");"
        }, {
          "Id": 105818,
          "Text": "Application.Load(\"GameOver\");"
        }]
      }, {
        "Id": 25550,
        "Text": "Hàm dựng (constructor) để là là kiểu nào để đảm bảo không tạo được đối tượng từ bên ngoài lớp, chỉ cho phép tạo đối tượng từ hàm GetInstance thôi.",
        "Marks": 1,
        "AnswerId": 105820,
        "Answers": [{
          "Id": 105819,
          "Text": "static"
        }, {
          "Id": 105820,
          "Text": "private"
        }, {
          "Id": 105821,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105822,
          "Text": "public"
        }]
      }, {
        "Id": 25551,
        "Text": "Để tạo hiệu ứng cháy nổ, sương, khói… trong Game ta vào đường dẫn sau:",
        "Marks": 1,
        "AnswerId": 105823,
        "Answers": [{
          "Id": 105823,
          "Text": "Menu- GameObject- Particle System"
        }, {
          "Id": 105824,
          "Text": "Menu- GameObject- Camera"
        }, {
          "Id": 105825,
          "Text": "Menu- GameObject- UI-Image"
        }, {
          "Id": 105826,
          "Text": "Menu- GameObject- Light"
        }]
      }, {
        "Id": 25552,
        "Text": "Trong một Scene có thể có bao nhiêu Camera?",
        "Marks": 1,
        "AnswerId": 105829,
        "Answers": [{
          "Id": 105827,
          "Text": "3"
        }, {
          "Id": 105828,
          "Text": "2"
        }, {
          "Id": 105829,
          "Text": "Nhiều"
        }, {
          "Id": 105830,
          "Text": "1"
        }]
      }, {
        "Id": 25553,
        "Text": "Thuộc tính nào quy định khoảng cách xa nhất, gần nhất hiển thị được trong tầm nhìn của Camera.",
        "Marks": 1,
        "AnswerId": 105833,
        "Answers": [{
          "Id": 105831,
          "Text": "Background"
        }, {
          "Id": 105832,
          "Text": "Fiel of View"
        }, {
          "Id": 105833,
          "Text": "Clipping plane"
        }, {
          "Id": 105834,
          "Text": "Depth"
        }]
      }, {
        "Id": 25554,
        "Text": "Thuộc tính nào của thành phần Camera xác định các bộ phận mà màn hình sẽ bị xóa. Thuận tiện khi sử dụng nhiều máy ảnh và để vẽ nhiều đổi tượng khác nhau. Không xóa nó sẽ hiển thị màu đen xì.",
        "Marks": 1,
        "AnswerId": 105837,
        "Answers": [{
          "Id": 105835,
          "Text": "Projection"
        }, {
          "Id": 105836,
          "Text": "Culling Mask"
        }, {
          "Id": 105837,
          "Text": "Clear Flags"
        }, {
          "Id": 105838,
          "Text": "Background"
        }]
      }, {
        "Id": 25555,
        "Text": "Trong những thuộc tính sau, đâu không phải là thuộc tính của thành phần Particle System?",
        "Marks": 1,
        "AnswerId": 105839,
        "Answers": [{
          "Id": 105839,
          "Text": "Position"
        }, {
          "Id": 105840,
          "Text": "Looping"
        }, {
          "Id": 105841,
          "Text": "Prewarm"
        }, {
          "Id": 105842,
          "Text": "Duration"
        }]
      }, {
        "Id": 25556,
        "Text": "Thuộc tính nào của thành phần Sound xác định độ ưu tiên của Audio Source trong số tất cả các Audio Source có trong Scene?",
        "Marks": 1,
        "AnswerId": 105843,
        "Answers": [{
          "Id": 105843,
          "Text": "Priority"
        }, {
          "Id": 105844,
          "Text": "Play on Wake"
        }, {
          "Id": 105845,
          "Text": "Pitch"
        }, {
          "Id": 105846,
          "Text": "Volumn"
        }]
      }, {
        "Id": 25557,
        "Text": "Thuộc tính nào của thành phần Camera chỉ định các lớp đối tượng của bạn trong Inspector, cho phép hoặc bỏ qua các đối tượng được hiển thị trong Camera.",
        "Marks": 1,
        "AnswerId": 105850,
        "Answers": [{
          "Id": 105847,
          "Text": "Projection"
        }, {
          "Id": 105848,
          "Text": "Fiel of View"
        }, {
          "Id": 105849,
          "Text": "Size"
        }, {
          "Id": 105850,
          "Text": "Culling Mask"
        }]
      }, {
        "Id": 25558,
        "Text": "Thuộc tính nào của thành phần Sound xác định bao nhiêu hiệu ứng âm thanh Dopper sẽ được áp dụng cho Audio Source(Nếu cài đặt là 0 thì sẽ không có hiệu ứng nào được áp dụng).?",
        "Marks": 1,
        "AnswerId": 105854,
        "Answers": [{
          "Id": 105851,
          "Text": "Min Distance"
        }, {
          "Id": 105852,
          "Text": "Spread"
        }, {
          "Id": 105853,
          "Text": "Pan Lever"
        }, {
          "Id": 105854,
          "Text": "Doppler Lever"
        }]
      }, {
        "Id": 25559,
        "Text": "Để đối tượng sau khi xuất hiện 3 giây sẽ tự động hủy, ta dùng hàm sau?",
        "Marks": 1,
        "AnswerId": 105858,
        "Answers": [{
          "Id": 105855,
          "Text": "Exit(gameObject,3)"
        }, {
          "Id": 105856,
          "Text": "Cancel(gameObject, 3)"
        }, {
          "Id": 105857,
          "Text": "Delete(gameObject,3)"
        }, {
          "Id": 105858,
          "Text": "Destroy(gameObject,3)"
        }]
      }, {
        "Id": 25560,
        "Text": "Phần mềm nào sau đây có thể sử dụng để viết cho Unity?",
        "Marks": 1,
        "AnswerId": 105860,
        "Answers": [{
          "Id": 105859,
          "Text": "UnityScript Editor"
        }, {
          "Id": 105860,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105861,
          "Text": "Notepad, MS word"
        }, {
          "Id": 105862,
          "Text": "MS .Net"
        }]
      }, {
        "Id": 25561,
        "Text": "Trong C#, cấu trúc đầy đủ khi khai báo một method là?",
        "Marks": 1,
        "AnswerId": 105863,
        "Answers": [{
          "Id": 105863,
          "Text": "private/public/static ([par1,par2]) { … }"
        }, {
          "Id": 105864,
          "Text": "private/public/static { … }"
        }, {
          "Id": 105865,
          "Text": "private/public/static ([par1,par2]) { … }"
        }, {
          "Id": 105866,
          "Text": "Tất cả các phương án đều sai"
        }]
      }, {
        "Id": 25562,
        "Text": "Để tối ưu hóa mã nguồn, ta sử dụng các thành phần của GameObject thông qua biến nào?",
        "Marks": 1,
        "AnswerId": 105869,
        "Answers": [{
          "Id": 105867,
          "Text": "public"
        }, {
          "Id": 105868,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 105869,
          "Text": "private"
        }, {
          "Id": 105870,
          "Text": "public và private"
        }]
      }, {
        "Id": 25563,
        "Text": "Unity hỗ trợ bao nhiêu ngôn ngữ?",
        "Marks": 1,
        "AnswerId": 105873,
        "Answers": [{
          "Id": 105871,
          "Text": "5"
        }, {
          "Id": 105872,
          "Text": "4"
        }, {
          "Id": 105873,
          "Text": "3"
        }, {
          "Id": 105874,
          "Text": "2"
        }]
      }, {
        "Id": 25564,
        "Text": "Trong JavaScritp, hàm nào dùng để tìm ra số lớn nhất?",
        "Marks": 1,
        "AnswerId": 105877,
        "Answers": [{
          "Id": 105875,
          "Text": "Math.random()"
        }, {
          "Id": 105876,
          "Text": "Math.round(1.5)"
        }, {
          "Id": 105877,
          "Text": "Math.max(1,-2)"
        }, {
          "Id": 105878,
          "Text": "Math.pow(-3, 2)"
        }]
      }, {
        "Id": 25565,
        "Text": "Trong JavaScript, khi khai báo một Class, để kế thừa từ MonoBehavior, ta dùng từ khóa nào?",
        "Marks": 1,
        "AnswerId": 105881,
        "Answers": [{
          "Id": 105879,
          "Text": "private"
        }, {
          "Id": 105880,
          "Text": "inherit"
        }, {
          "Id": 105881,
          "Text": "extend"
        }, {
          "Id": 105882,
          "Text": "class"
        }]
      }, {
        "Id": 25566,
        "Text": "Đâu là cấu trúc khai báo biến đầy đủ dùng trong JavaScript?",
        "Marks": 1,
        "AnswerId": 105883,
        "Answers": [{
          "Id": 105883,
          "Text": "var [= ];"
        }, {
          "Id": 105884,
          "Text": "var [: Type] [= ];"
        }, {
          "Id": 105885,
          "Text": "private/public/static [=];"
        }, {
          "Id": 105886,
          "Text": "private/public/static [=];"
        }]
      }, {
        "Id": 25567,
        "Text": "Khi click chuột trái thì sự kiện nào được gọi?",
        "Marks": 1,
        "AnswerId": 105887,
        "Answers": [{
          "Id": 105887,
          "Text": "OnMouseDown"
        }, {
          "Id": 105888,
          "Text": "Awake"
        }, {
          "Id": 105889,
          "Text": "OnMouseUp"
        }, {
          "Id": 105890,
          "Text": "OnMouseOver"
        }]
      }, {
        "Id": 25568,
        "Text": "Đâu là cách khai báo biến private nào là của C#?",
        "Marks": 1,
        "AnswerId": 105891,
        "Answers": [{
          "Id": 105891,
          "Text": "public class example : MonoBehaviour { private float memberVariable = 0.0F;}"
        }, {
          "Id": 105892,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 105893,
          "Text": "private var memberVariable = 0.0;"
        }, {
          "Id": 105894,
          "Text": "class example(MonoBehaviour): private memberVariable as single = 0.0F"
        }]
      }, {
        "Id": 25569,
        "Text": "Tạo một biến global bằng cách sử dụng từ khóa nào?",
        "Marks": 1,
        "AnswerId": 105896,
        "Answers": [{
          "Id": 105895,
          "Text": "Private"
        }, {
          "Id": 105896,
          "Text": "Static"
        }, {
          "Id": 105897,
          "Text": "Public"
        }, {
          "Id": 105898,
          "Text": "Tất cả các phương án đều sai"
        }]
      }, {
        "Id": 25570,
        "Text": "Trong lớp Component, đâu là phương thức có thể sử dụng?",
        "Marks": 1,
        "AnswerId": 105900,
        "Answers": [{
          "Id": 105899,
          "Text": "GetComponent"
        }, {
          "Id": 105900,
          "Text": "Tất cả các phương án đều đúng"
        }, {
          "Id": 105901,
          "Text": "SendMessage"
        }, {
          "Id": 105902,
          "Text": "CompareTag"
        }]
      }, {
        "Id": 25571,
        "Text": "Trong JavaScritp, để làm tròn lên một số ta dùng hàm nào?",
        "Marks": 1,
        "AnswerId": 105903,
        "Answers": [{
          "Id": 105903,
          "Text": "Math.round(1.5)"
        }, {
          "Id": 105904,
          "Text": "Math.pow(-3, 2)"
        }, {
          "Id": 105905,
          "Text": "Math.random()"
        }, {
          "Id": 105906,
          "Text": "Math.floor(1.9)"
        }]
      }, {
        "Id": 25572,
        "Text": "Trong JavaScritp, để lấy số ngẫu nhiên ta dùng hàm nào?",
        "Marks": 1,
        "AnswerId": 105910,
        "Answers": [{
          "Id": 105907,
          "Text": "Math.round(1.5)"
        }, {
          "Id": 105908,
          "Text": "Math.max(1,-2)"
        }, {
          "Id": 105909,
          "Text": "Math.pow(-3, 2)"
        }, {
          "Id": 105910,
          "Text": "Math.random()"
        }]
      }, {
        "Id": 25573,
        "Text": "Những đoạn code thuộc phương thức này sẽ được thực thi khi chuột của người chơi click vào một đối tượng có tích hợp thành phần GUIElement hoặc Collider",
        "Marks": 1,
        "AnswerId": 105913,
        "Answers": [{
          "Id": 105911,
          "Text": "OnCollisionEnter()"
        }, {
          "Id": 105912,
          "Text": "Awake()"
        }, {
          "Id": 105913,
          "Text": "OnMouseDown()"
        }, {
          "Id": 105914,
          "Text": "Start()"
        }]
      }, {
        "Id": 25574,
        "Text": "Trong những loại biến sau, loại nào không phải của C#?",
        "Marks": 1,
        "AnswerId": 105916,
        "Answers": [{
          "Id": 105915,
          "Text": "Boolean"
        }, {
          "Id": 105916,
          "Text": "Undefined"
        }, {
          "Id": 105917,
          "Text": "String"
        }, {
          "Id": 105918,
          "Text": "Int"
        }]
      }, {
        "Id": 25575,
        "Text": "Đâu là khai báo mảng nhiều chiều trong C#?",
        "Marks": 1,
        "AnswerId": 105922,
        "Answers": [{
          "Id": 105919,
          "Text": "int[][] arrInt = new int[2][3]"
        }, {
          "Id": 105920,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 105921,
          "Text": "var a = new int[16,16];"
        }, {
          "Id": 105922,
          "Text": "int[,] = new int[16,16];"
        }]
      }, {
        "Id": 25576,
        "Text": "Đâu là cấu trúc khai báo biến đầy đủ dùng trong JavaScript?",
        "Marks": 1,
        "AnswerId": 105926,
        "Answers": [{
          "Id": 105923,
          "Text": "var [= ];"
        }, {
          "Id": 105924,
          "Text": "private/public/static [=];"
        }, {
          "Id": 105925,
          "Text": "private/public/static [=];"
        }, {
          "Id": 105926,
          "Text": "var [: Type] [= ];"
        }]
      }, {
        "Id": 25577,
        "Text": "Đâu là cách khai báo biến static nào là của JavaScript?",
        "Marks": 1,
        "AnswerId": 105929,
        "Answers": [{
          "Id": 105927,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 105928,
          "Text": "class example(MonoBehaviour): static globalVariable as single"
        }, {
          "Id": 105929,
          "Text": "static var globalVariable = 0.0;"
        }, {
          "Id": 105930,
          "Text": "public class example : MonoBehaviour { static float globalVariable = 0.0F;}"
        }]
      }, {
        "Id": 25578,
        "Text": "Trong các khai báo biến trong JavaScript sau, khai báo nào không đúng?",
        "Marks": 1,
        "AnswerId": 105933,
        "Answers": [{
          "Id": 105931,
          "Text": "var name = \"String variable\""
        }, {
          "Id": 105932,
          "Text": "var n1;"
        }, {
          "Id": 105933,
          "Text": "var:String=\"String variable\""
        }, {
          "Id": 105934,
          "Text": "var n:int =0;"
        }]
      }, {
        "Id": 25579,
        "Text": "Quy định đặt tên Class phải đặt giống tên file .cs được quy định trong ngôn ngữ nào?",
        "Marks": 1,
        "AnswerId": 105937,
        "Answers": [{
          "Id": 105935,
          "Text": "Boo"
        }, {
          "Id": 105936,
          "Text": "Tất cả các phương án đều sai"
        }, {
          "Id": 105937,
          "Text": "C#"
        }, {
          "Id": 105938,
          "Text": "JavaScript"
        }]
      }]
    }
  ];
  switchModalBox(x: string) {
    document.getElementById('overlay').style.display = x;
    document.getElementById('box-message').style.display = x;
  }
  checkLogin(event, x: string, Idmon) {
    var loginTus = JSON.parse(sessionStorage.getItem('loginTus'));
    if (loginTus != true) {
      event.preventDefault();
      this.switchModalBox(x);
    } else {
      var confirm = window.confirm('Ban co muon chuyen den mon nay ?');
      if (confirm) {
        this.router.navigate(['/test']);
        sessionStorage.setItem('lessionId', Idmon);
        setTimeout(() => {
          location.reload(true);
        }, 100);
      }

    }
  }

}
