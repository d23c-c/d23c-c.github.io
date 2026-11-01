// Original study-note examples. Never insert credentials or exercise solutions here.
export const units = [];
const cpp = (body, pre = "") => `#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\n${pre}\nint main() {\n${body}\n}\n`;
const add = (language, id, title, topic, code, concepts, pitfalls, tags, chapter, exercise, quiz, extra = {}) => units.push({language,id,title,topic,code,concepts,pitfalls,tags,chapter,exercise,quiz,...extra});
const C = (...args) => add("cpp",...args);
C("C01","Environment and Syntax","環境、語法與註解",cpp('cout << "Study log" << ": " << 1 << "\\n";'),
 ["原始碼先經編譯與連結才成為可執行檔；修改 .cpp 後必須重新編譯。","main 是程式進入點；敘述通常以分號結束，大括號界定區塊。","// 用於單行註解，/* */ 用於區塊註解；註解不會成為輸出。"],
 ["錯誤：省略 cout 敘述結尾的分號 → 編譯失敗；原因是敘述未結束。修正：在敘述尾端補上分號。","錯誤：修改原始碼後直接執行舊的 exe → 仍看到舊輸出；原因是編譯產物沒有更新。修正：確認編譯成功再執行。"], ["syntax","setup"],"cpp_syntax","建立學習紀錄程式，輸出課程名稱與兩行註解說明；編譯時啟用 -Wall -Wextra。",["註解中的文字會顯示在終端機嗎？","不會；只有輸出敘述的內容才會顯示。"]);
C("C02","Input and Output","輸入與輸出",cpp('int value;\ncin >> value;\ncout << "Next: " << value + 1 << "\\n";'),
 ["cout 使用 << 輸出，cin 使用 >> 擷取格式化輸入。","擷取整數時會略過前導空白；輸入型別不符會設定失敗狀態。","批次判題不要額外輸出提示文字；多筆測資用讀取成功當作迴圈條件。"],
 ["錯誤：cin << value → 編譯失敗；串流方向用反。修正：輸入使用 >>。","錯誤：未檢查讀取是否成功就使用 value → 可能處理無效資料。修正：以 if (cin >> value) 保護後續運算。"], ["input-output"],"cpp_user_input","讀入兩個整數並分兩行輸出，另測試空白、換行與非數字輸入。",["輸入兩個數字時，空白和換行可以互換嗎？","格式化整數輸入通常都視為分隔空白。"],{input:"8\n"});
C("C03","Variables and Constants","變數與常數",cpp('int lessons = 3;\nconst int target = 6;\nlessons += 1;\ncout << lessons << "/" << target << "\\n";'),
 ["變數具有型別、名稱與儲存的值；宣告時初始化能避免讀取未定值。","識別字區分大小寫，不能以數字開頭，也不能使用保留字。","const 限制初始化之後的修改，適合表達固定上限或設定。"],
 ["錯誤：int score; 後直接讀 score → 可能涉及未定值與未定義行為。修正：宣告時初始化。","錯誤：對 const 變數重新賦值 → 編譯失敗。修正：需要變動的狀態不要宣告為 const。"], ["variables","types"],"cpp_variables","用兩個變數記錄已完成與目標單元數，更新進度但維持目標不變。",["count 與 Count 是同一個變數嗎？","不是；C++ 識別字區分大小寫。"]);
C("C04","Data Types and Conversion","型別、數字與轉型",cpp('int count = 5;\ndouble average = static_cast<double>(count) / 2;\nchar level = \'B\';\nbool ready = true;\ncout << average << " " << level << " " << ready << "\\n";'),
 ["整數與浮點數的表示範圍、精度不同；型別大小不要直接假設所有平台相同。","char 儲存字元值，bool 表達真假；auto 由初始化運算式推導型別。","除法前轉為 double 才能保留小數，除完才轉型無法找回已截去的部分。"],
 ["錯誤：double x = 5 / 2 → 得到 2；原因是先做整數除法。修正：讓一個運算元先成為 double。","錯誤：把過大的數值放入較小型別 → 可能溢位或截斷。修正：依資料範圍選型別並檢查邊界。"], ["types","conversion"],"cpp_data_types","比較同一組整數在整數除法與浮點除法中的結果，另測試負值。",["auto x = 5 / 2 的 x 是 double 嗎？","不是；運算結果是 int。"]);
C("C05","Operators and Precedence","運算子與優先序",cpp('int n = 7;\ncout << n / 2 << " " << n % 2 << "\\n";\ncout << (n > 0 && n < 10) << " " << (2 + 3 * 4) << "\\n";'),
 ["算術、指定、比較與邏輯運算子有不同用途；= 指定，== 比較。","&& 與 || 會短路求值；先判斷分母或指標是否有效，再做後續運算。","乘除先於加減，複雜條件應加括號；整數除法向零截斷。"],
 ["錯誤：if (n = 0) → 修改 n 而不是比較。修正：使用 n == 0，並留意編譯警告。","錯誤：用 0 < n < 10 表示區間 → 前半部先變成 bool。修正：寫成 0 < n && n < 10。"], ["operators","control-flow"],"cpp_operators","為區間檢查建立邊界測試：-1、0、1、9、10；說明每個條件的真假。",["-7 / 2 在整數運算中是多少？","-3；C++ 整數除法向零截斷。"]);
C("C06","Strings","字串與文字輸入",cpp('string line;\ngetline(cin, line);\ncout << line.length() << "\\n";\ncout << line + "!" << "\\n";'),
 ["std::string 管理可變長度文字；+ 串接字串，length 或 size 回傳長度。","cin >> word 遇空白停止，getline 才會讀取整行文字。","索引從 0 開始；對 UTF-8 字串，size 通常是位元組數，不是中文字數。"],
 ["錯誤：用 cin >> name 讀含空白姓名 → 後半部被留在串流。修正：使用 getline。","錯誤：讀完整數立刻 getline → 可能先讀到殘留換行。修正：處理分隔字元，再讀取下一行。"], ["strings","input-output"],"cpp_strings","讀取含空白的課程名稱，輸出原文、長度與串接後的標題；另測試空字串。",["string 的最後一個有效索引是 size() 嗎？","不是；非空字串最後一個字元索引是 size()-1。"],{input:"study log\n"});
C("C07","Math and Booleans","數學函式與布林值",cpp('cout << sqrt(81.0) << " " << abs(-6) << "\\n";\nbool complete = 4 >= 4;\ncout << boolalpha << complete << "\\n";'),
 ["cmath 提供 sqrt 等數學函式；輸入範圍與浮點誤差仍需要由程式處理。","bool 只有 true 與 false；比較運算可直接產生布林值。","boolalpha 只改變串流顯示格式，不會把變數型別改成字串。"],
 ["錯誤：直接用 == 比較累積運算後的浮點結果 → 可能因誤差失敗。修正：按問題允許誤差比較差值。","錯誤：把所有非零數當成特定的 1 → 混淆數值與真假。修正：先明確寫出判斷條件。"], ["math","types"],"cpp_math","比較開根號前後的平方差，為浮點結果設定合理的容許誤差。",["boolalpha 會改變 complete 的值嗎？","不會，只影響輸出表示方式。"]);
C("C08","Conditions and Switch","條件判斷",cpp('int level = 2;\nif (level >= 3) cout << "advanced\\n";\nelse if (level == 2) cout << "practice\\n";\nelse cout << "review\\n";\nswitch (level) { case 2: cout << "two\\n"; break; default: cout << "other\\n"; }'),
 ["if/else if 由上到下檢查，第一個成立的分支執行後，不會再測後面的分支。","switch 依整數或列舉等允許的型別選擇分支；case 標記不是一般運算條件。","break 用來結束 switch；未跳出時可能繼續執行後面的 case。"],
 ["錯誤：if (condition); 後再接區塊 → 分號成了空敘述。修正：移除條件後的多餘分號。","錯誤：case 後漏寫 break → 非預期貫穿。修正：明確跳出，或為刻意貫穿加上說明。"], ["conditions","control-flow"],"cpp_conditions","將課程進度分成三個等級，測試每個邊界，再用 switch 處理選單選項。",["else 會對應哪個 if？","沒有大括號時對應最近尚未配對的 if；加大括號較清楚。"]);
C("C09","Loops","迴圈、break 與 continue",cpp('int total = 0;\nfor (int i = 1; i <= 4; ++i) total += i;\ncout << total << "\\n";\nint count = 0;\ndo { ++count; } while (count < 1);\ncout << count << "\\n";'),
 ["while 先判斷，do-while 至少執行一次；for 適合已知更新規則的迴圈。","break 結束最近一層迴圈，continue 跳到下一輪的更新或條件檢查。","讀到 EOF 應使用 while (cin >> value)，不要先用 eof() 預測下一次讀取。"],
 ["錯誤：迴圈變數沒有更新 → 可能無限迴圈。修正：逐條路徑檢查更新與停止條件。","錯誤：用 i <= size 走訪索引 → 多執行一次。修正：上界使用 i < size。"], ["loops","control-flow"],"cpp_while_loop","累計一段整數區間，測試空區間與只含一個數字的區間；不用自訂函式。",["while 的本體一定會執行一次嗎？","不一定；條件一開始為 false 時執行 0 次。"]);
C("C10","Arrays","一維與多維陣列",cpp('int scores[3] = {72, 86, 91};\nint total = 0;\nfor (int value : scores) total += value;\ncout << total << " " << scores[1] << "\\n";'),
 ["固定陣列的元素型別相同，索引範圍是 0 到元素數量減一。","range-based for 可依序取出元素；索引迴圈適合需要位置的情境。","二維陣列可用巢狀迴圈處理；必須分清楚列數與行數。"],
 ["錯誤：讀取 scores[3] → 超出三元素陣列邊界，涉及未定義行為。修正：檢查索引範圍。","錯誤：以為區域陣列未指定的所有位置都有任意可用值。修正：使用完整初始化或 {} 零初始化。"], ["arrays","loops"],"cpp_arrays","記錄五次練習分數，計算總分並輸出每筆分數的位置；不使用 vector。",["int a[4] = {} 的四個元素初始值為何？","全部為 0。"]);
C("C11","Structs and Enums","結構與列舉",cpp('Lesson entry = {2, 45};\nStage stage = Practice;\ncout << entry.id << " " << entry.minutes << " " << stage << "\\n";', 'struct Lesson { int id; int minutes; };\nenum Stage { Review, Practice, Complete };'),
 ["struct 把相關欄位組成一筆資料，透過點號存取成員。","enum 以具名值表達狀態，比散落的數字常值更容易閱讀。","多筆記錄可放進結構陣列；型別定義與物件宣告是不同動作。"],
 ["錯誤：在 struct 定義結尾漏寫分號 → 編譯失敗。修正：使用 }; 結束型別定義。","錯誤：把任何整數直接當成有效狀態 → 失去列舉的語意限制。修正：只接受已定義的狀態並驗證輸入。"], ["structs","types"],"cpp_structs","為學習單元建立包含代號、時間與狀態的結構，列出三筆記錄。",["定義 struct Lesson 是否已經建立一筆 Lesson 資料？","沒有；還需要宣告物件。"]);
C("C12","References","參照與別名",cpp('int minutes = 20;\nint& alias = minutes;\nalias += 5;\ncout << minutes << " " << (&alias == &minutes) << "\\n";'),
 ["參照是既有物件的別名，不是額外獨立的數值副本。","一般左值參照在宣告時綁定物件，之後不能改綁另一個物件。","對別名指定值會修改原物件；& 在宣告中與運算式中具有不同角色。"],
 ["錯誤：int& ref; → 一般參照缺少初始化，編譯失敗。修正：宣告時綁定物件。","錯誤：ref = other 後以為 ref 改綁 other。修正：理解這是將 other 的值寫入原物件。"], ["references","memory"],"cpp_references","建立一個整數與參照，從兩個名稱修改資料，觀察值與位址的關係。",["修改 alias 後，minutes 會改變嗎？","會；兩個名稱指向同一個物件。"]);
C("C13","Pointers","指標與解參照",cpp('int minutes = 20;\nint* pointer = &minutes;\n*pointer = 35;\ncout << minutes << " " << *pointer << "\\n";\npointer = nullptr;\ncout << (pointer == nullptr) << "\\n";'),
 ["指標儲存位址，& 取得物件位址，* 解參照存取該位址的物件。","指標可以改指向其他物件，也可以是 nullptr；這與一般參照不同。","解參照前必須確認物件仍存活且指標有效；非 nullptr 不等於一定有效。"],
 ["錯誤：解參照 nullptr → 未定義行為。修正：先檢查並建立有效的物件關係。","錯誤：物件生命週期結束後仍使用其位址 → 懸空指標。修正：讓使用範圍不超過物件生命週期。"], ["pointers","memory"],"cpp_pointers","用一個指標輪流修改兩個整數；最後設為 nullptr，停止解參照。",["p 與 *p 的意思相同嗎？","不同；p 是位址，*p 是該位址所指物件的存取。"]);
C("C14","Dynamic Memory","動態記憶體",cpp('int* minutes = new int(25);\ncout << *minutes << "\\n";\ndelete minutes;\nminutes = nullptr;\nint* values = new int[2]{4, 8};\ncout << values[0] + values[1] << "\\n";\ndelete[] values;'),
 ["new 配置物件並回傳指標，delete 結束單一動態物件的生命週期。","陣列配置 new[] 必須對應 delete[]；配置與釋放方式不能混用。","本單元練習辨識所有權與生命週期；同一份資源只能釋放一次。"],
 ["錯誤：new[] 配 delete → 未定義行為。修正：配置與釋放成對使用。","錯誤：delete p 後又使用 *p → use-after-free。修正：釋放後停止存取並清楚管理所有權。"], ["memory","pointers"],"cpp_memory_management","配置三元素整數陣列、填入數值、輸出總和，再正確釋放一次。",["delete p 會自動把 p 改成 nullptr 嗎？","不會；需要自行指定，而且其他指標副本也不會同步更新。"]);
C("C15","Functions and Parameters","函式基礎與回傳值",cpp('cout << sessionMinutes(3) << " " << sessionMinutes(2, 15) << "\\n";', 'int sessionMinutes(int sessions, int minutes = 20) { return sessions * minutes; }'),
 ["函式用具名介面封裝工作；參數是輸入，return 決定回傳值。","呼叫前需要可見的宣告或定義；回傳型別應符合運算需求。","預設參數由呼叫端省略尾端引數時採用；定義與宣告不要重複指定。"],
 ["錯誤：非 void 函式走到沒有回傳值的路徑 → 結果不可靠。修正：涵蓋所有分支。","錯誤：將函式內的區域變數當成呼叫端可直接存取的值。修正：透過參數與回傳值交換資料。"], ["functions"],"cpp_functions","建立將練習次數轉成總分鐘數的函式，再測試 0 次與不同的每次時間。",["預設參數會讓函式不能接收明確的第二個引數嗎？","不會；有提供引數就使用呼叫端的值。"]);
C("C16","Passing References Arrays and Structs","參照、陣列與結構參數",cpp('Lesson log{20};\naddMinutes(log, 10);\nint values[2]{5, 7};\ncout << log.minutes << " " << total(values, 2) << "\\n";', 'struct Lesson { int minutes; };\nvoid addMinutes(Lesson& log, int extra) { log.minutes += extra; }\nint total(const int values[], int size) { int result = 0; for (int i=0;i<size;++i) result += values[i]; return result; }'),
 ["傳值建立參數副本；非 const 參照讓函式能修改呼叫端的物件。","const 參照可避免不必要的複製，並限制透過該參數修改資料。","陣列作為函式參數通常退化為指標，應另傳長度，不能在函式內用 sizeof 推算原陣列長度。"],
 ["錯誤：傳值後期待原結構被更新 → 只改到副本。修正：需要修改原物件時用參照參數。","錯誤：用參數的 sizeof 當陣列總長 → 量到的是指標大小。修正：明確傳入有效元素數。"], ["functions","references","arrays"],"cpp_function_reference","用函式更新學習記錄，再寫只讀陣列參數的統計函式；測試長度為 0。",["const int values[] 能禁止呼叫端修改原陣列嗎？","不能；它只限制此函式透過該參數的修改。"]);
C("C17","Overloading Scope Recursion and Lambdas","多載、作用域、遞迴與 Lambda",cpp('int offset = 2;\nauto adjust = [offset](int n) { return n + offset; };\ncout << twice(3) << " " << twice(1.5) << " " << steps(3) << " " << adjust(4) << "\\n";', 'int twice(int n) { return n * 2; }\ndouble twice(double n) { return n * 2; }\nint steps(int n) { if (n <= 0) return 0; return 1 + steps(n-1); }'),
 ["函式多載依參數型別與數量區分，不能只靠回傳型別。","區域名稱有作用域；同名遮蔽容易讓人修改錯誤的物件。","遞迴需要終止條件；Lambda 的擷取列表決定如何取得外部變數。"],
 ["錯誤：遞迴時參數沒有靠近終止條件 → 可能堆疊耗盡。修正：證明每次呼叫都縮小問題。","錯誤：離開區域後使用擷取區域參照的 Lambda → 可能懸空。修正：確認生命週期或以值擷取。"], ["functions","recursion","lambdas"],"cpp_function_overloading","以多載處理整數與浮點學習時間；為遞迴建立 n=0、1、4 的測試。",["int f(int) 與 double f(int) 能形成多載嗎？","不能；參數列表相同，回傳型別不足以區分。"]);
C("C18","Classes Objects and Constructors","類別、物件與建構子",cpp('Session morning(25);\nSession afternoon(40);\ncout << morning.minutes() << " " << afternoon.minutes() << "\\n";', 'class Session { int value; public: Session(int minutes): value(minutes) {} int minutes() const { return value; } };'),
 ["class 描述物件的資料與操作；兩個物件通常各自保有獨立狀態。","建構子在建立物件時初始化狀態，名稱與類別相同且沒有回傳型別。","方法可以在類別內定義，或在外部使用範圍解析運算子定義。"],
 ["錯誤：把建構子宣告成 void Session() → 不再是合法的建構子寫法。修正：移除回傳型別。","錯誤：建構時沒有初始化成員，之後直接讀取 → 值可能未定。修正：使用成員初始化列表。"], ["classes","oop","constructors"],"cpp_classes","建立 StudySession 類別，初始化兩個物件並證明修改其中一個不會更新另一個。",["類別與物件是否相同？","類別是型別定義，物件是該型別的實例。"]);
C("C19","Access Control and Encapsulation","存取控制與封裝",cpp('Session log;\nlog.setMinutes(-4);\ncout << log.minutes() << "\\n";\nlog.setMinutes(30);\ncout << log.minutes() << "\\n";', 'class Session { private: int value = 0; public: void setMinutes(int n) { if (n >= 0) value = n; } int minutes() const { return value; } };'),
 ["private 隱藏類別內部資料，public 提供對外操作介面。","封裝的重點是維持有效狀態，不只是把欄位改成 private。","修改方法要明確定義無效輸入的處理方式；查詢方法可標為 const。"],
 ["錯誤：由外部直接寫入 private 成員 → 編譯失敗。修正：透過公開的方法操作。","錯誤：setter 無條件接受負時間 → 雖然封裝了欄位，仍破壞狀態。修正：在邊界驗證資料。"], ["oop","encapsulation"],"cpp_encapsulation","為成績或時間欄位設定合法範圍；測試小於下界、剛好邊界與正常值。",["有 getter/setter 就一定達成良好封裝嗎？","不一定；仍必須維持資料的不變條件。"]);
C("C20","Inheritance","繼承與存取層級",cpp('TimedSession log(35);\ncout << log.minutes() << "\\n";', 'class Session { protected: int value; public: Session(int n):value(n) {} };\nclass TimedSession : public Session { public: TimedSession(int n):Session(n) {} int minutes() const { return value; } };'),
 ["繼承表達 is-a 關係；衍生類別可以擴充基底類別提供的能力。","public/protected/private 繼承影響對外可見的存取權限，不會讓基底 private 成員變成可直接存取。","多層與多重繼承可能產生命名歧義；需要明確指出使用哪個基底介面。"],
 ["錯誤：衍生類別直接操作基底的 private 成員 → 編譯失敗。修正：使用基底公開或受保護的介面。","錯誤：只為重用幾行程式就建立繼承 → 介面關係不合理。修正：先判斷是否真的是 is-a，否則考慮組合。"], ["oop","inheritance"],"cpp_inheritance","建立基底課程與兩種衍生課程，各自加入不同的資訊但共用基本查詢介面。",["public 繼承會讓基底的 private 成員變成 public 嗎？","不會；基底 private 成員仍不可直接存取。"]);
C("C21","Polymorphism and Virtual Functions","多型與虛擬函式",cpp('Session* current = new Practice;\ncout << current->kind() << "\\n";\ndelete current;', 'class Session { public: virtual const char* kind() const { return "session"; } virtual ~Session() = default; };\nclass Practice : public Session { public: const char* kind() const override { return "practice"; } };'),
 ["透過基底指標或參照呼叫 virtual 方法，才會依物件的動態型別選擇實作。","override 讓編譯器檢查是否真的覆寫了基底方法，避免簽名不一致。","透過基底指標刪除衍生物件時，基底解構子必須為 virtual；同時遵守動態記憶體所有權。"],
 ["錯誤：基底方法未宣告 virtual 卻期待動態派送 → 呼叫可能依靜態型別選擇。修正：明確定義虛擬介面。","錯誤：將衍生物件以值複製成基底物件 → 發生物件切割。修正：需要多型時使用有效的參照或指標。"], ["oop","polymorphism","memory"],"cpp_polymorphism","為兩種課程實作同一個虛擬查詢方法，透過基底指標操作並驗證不同輸出。",["override 能修正參數型別寫錯的覆寫嗎？","它不會自動修正，但能讓編譯器指出簽名不匹配。"]);
const P = (...args) => add("python",...args);
P("P01","Environment Syntax and Output","環境、縮排與輸出",'print("Study log")\n# 註解不會輸出\nprint(2 + 3)\n',
 ["直譯器執行 .py 檔；互動環境中的 >>> 提示符不是程式的一部分。","縮排是語法的一部分，同一區塊要維持一致；不要混用 tab 與空白。","print 可輸出多個值，預設以空白分隔並在結尾換行。"],
 ["錯誤：把 >>> 一起貼進 .py → SyntaxError。修正：只保留提示符後面的程式。","錯誤：同一區塊縮排不一致 → IndentationError 或錯誤的區塊關係。修正：統一使用四個空白。"], ["syntax","setup"],"python_syntax","輸出三行學習目標，改變 print 的 sep 與 end 並比較輸出。",["Python 用大括號界定一般敘述區塊嗎？","不是，主要使用縮排。"]);
P("P02","Reading Input","讀取輸入",'minutes = int(input())\nprint(minutes + 5)\n',
 ["input 讀取一行並回傳字串，移除行尾換行；不會自動轉成數字。","需要整數時使用 int，輸入格式錯誤會引發 ValueError。","判題時不要加入額外提示字串；讀到 EOF 的情境與只讀一行不同。"],
 ["錯誤：input() + 1 → 字串與整數不能直接相加。修正：先轉型。","錯誤：預期永遠有下一行 → 到 EOF 時可能引發 EOFError。修正：依輸入規格選擇固定筆數或逐行讀取。"], ["input-output","conversion"],"python_user_input","讀取一行文字與一行整數，分清楚字串串接與數值相加。",["input 會自動辨識小數嗎？","不會，仍回傳 str。"],{input:"25\n"});
P("P03","Variables and Assignment","變數與指定",'completed = 3\ntarget = 7\ncompleted, target = target, completed\nprint(completed, target)\n',
 ["名稱綁定物件，物件具有型別；同一名稱之後可改綁不同物件。","多重指定可同時解包多個值；右側先求值，再完成左側指定。","名稱區分大小寫，應以有意義的命名表達資料角色。"],
 ["錯誤：尚未指定值就讀取名稱 → NameError。修正：先完成初始化。","錯誤：x = y 後以為複製了 y 指向的整個物件。修正：區分名稱綁定與物件複製，容器複製在 P12 展開。"], ["variables","references"],"python_variables","交換兩個數值，先寫出交換前後的狀態，再以多重指定實作。",["同一個名稱能先綁定 int 再綁定 str 嗎？","可以，這不會把原本的整數物件改成字串。"]);
P("P04","Types Numbers and Casting","型別、數字與轉型",'text = "24"\nminutes = int(text)\nprint(type(minutes).__name__)\nprint(minutes / 5, minutes // 5, minutes % 5)\n',
 ["int 可表示任意精度整數，但仍受到可用記憶體限制；float 具有有限精度。","/ 為一般除法，// 為向下取整的除法，% 與 // 的規則配合。","int、float、str 是明確轉型工具；不能把無效格式當成正常數字。"],
 ["錯誤：int('3.5') → ValueError。修正：先理解資料型別，不能直接以 int 解析小數字串。","錯誤：以為 -7 // 2 是 -3 → Python 會向下取整為 -4。修正：區分向下取整與向零截斷。"], ["types","conversion","operators"],"python_numbers","比較正負數的 /、//、% 關係，檢查 a == (a//b)*b + a%b。",["-7 % 2 是多少？","1；與向下取整的商 -4 配合。"]);
P("P05","Strings and Slicing","字串、切片與格式化",'name = "python notes"\nprint(name[0], name[-1])\nprint(name[:6].upper())\nprint(f"length={len(name)}")\n',
 ["str 是不可變的 Unicode 字元序列，索引支援負值。","切片 [start:stop:step] 不包含 stop；省略邊界時使用序列的對應端點。","f-string 把運算式放入格式化字串；方法通常回傳新字串而非原地修改。"],
 ["錯誤：name[0] = 'P' → TypeError。修正：建立新的字串。","錯誤：忘記 upper() 的回傳值 → 原字串沒有改變。修正：保留方法回傳的新值。"], ["strings","slicing"],"python_strings","將輸入標題去除前後空白、建立縮寫並以 f-string 輸出摘要。",["s[:3] 包含索引 3 的字元嗎？","不包含，只取 0、1、2。"]);
P("P06","Booleans and Operators","布林、邏輯與成員運算",'minutes = 18\nprint(10 <= minutes < 30)\nprint("py" in "python")\nprint(bool(""), bool("0"))\n',
 ["and、or 採短路求值，且回傳運算元，不保證結果是 bool。","in 測試成員關係；is 測試物件身分，不是一般值相等。","空字串與數值 0 為假，但字串 '0' 非空，因此為真。"],
 ["錯誤：以 is 比較兩個數字或字串的值 → 依物件重用而出現不可靠結果。修正：值比較用 ==。","錯誤：用 & 代替 and → 變成位元或型別自訂運算。修正：一般條件組合使用 and。"], ["operators","conditions"],"python_operators","為輸入值建立範圍、空字串與成員檢查，測試每個短路條件。",["bool('False') 是否為 False？","不是；它是非空字串，所以為 True。"]);
P("P07","Lists","List、排序與串列生成式",'minutes = [20, 35, 15]\nminutes.append(25)\nordered = sorted(minutes)\nprint(ordered)\nprint([value * 2 for value in minutes if value >= 20])\n',
 ["list 是可變的有序容器；append 加入單一物件，extend 展開可迭代物件。","sort 原地修改並回傳 None；sorted 產生新的排序串列。","串列生成式把轉換與條件寫在同一個運算式，仍應維持可讀性。"],
 ["錯誤：result = values.sort() → result 變成 None。修正：排序後讀 values，或使用 sorted。","錯誤：在走訪同一串列時刪除元素 → 可能跳過項目。修正：走訪副本或建立篩選後的新串列。"], ["collections","lists","loops"],"python_lists","整理五次練習時間，保留原順序的同時產生排序版，再篩出達標的記錄。",["append([1,2]) 與 extend([1,2]) 相同嗎？","不同；前者加入一個串列物件，後者加入兩個元素。"]);
P("P08","Tuples and Sets","Tuple 與 Set",'point = (3, 5)\nx, y = point\nunique = {2, 4, 2, 6}\nprint(x, y)\nprint(sorted(unique))\n',
 ["tuple 固定的是元素參照排列；若其中放入可變物件，該物件仍可能改變。","set 表達不重複成員集合，不支援一般位置索引，不應依賴迭代順序。","單元素 tuple 需要逗號；空 set 使用 set()，不是 {}。"],
 ["錯誤：(3) 當成 tuple → 實際是 int。修正：寫成 (3,)。","錯誤：用 {} 建立空集合 → 實際是 dict。修正：使用 set()。"], ["collections","sets","tuples"],"python_tuples","用 tuple 保存不可重新排列的座標，用 set 去除重複課程代號；排序後再顯示。",["set 的元素可以是 list 嗎？","一般 list 不可雜湊，不能作為 set 元素。"]);
P("P09","Dictionaries","Dictionary 與鍵值資料",'progress = {"cpp": 4, "python": 2}\nprogress["python"] += 1\nprint(progress.get("sql", 0))\nprint(sorted(progress.items()))\n',
 ["dict 以可雜湊的鍵查找值；重複鍵會覆蓋先前對應的值。","索引讀取不存在的鍵會引發 KeyError，get 可提供預設值。","巢狀 dict 可表達結構化記錄，但淺複製不會複製所有內層物件。"],
 ["錯誤：直接讀不存在的 progress['sql'] → KeyError。修正：先檢查鍵或使用 get。","錯誤：把 list 當成字典鍵 → TypeError。修正：使用適合且可雜湊的鍵。"], ["collections","dictionaries"],"python_dictionaries","以語言名稱為鍵保存學習進度，更新既有記錄並安全查詢不存在的語言。",["走訪 dict 時預設取得鍵還是值？","鍵；需要鍵值對時使用 items()。"]);
P("P10","Conditions and Match","條件判斷與 match",'level = 2\nif level >= 3:\n    print("advanced")\nelif level == 2:\n    print("practice")\nelse:\n    print("review")\nmatch level:\n    case 2:\n        print("two")\n    case _:\n        print("other")\n',
 ["if/elif/else 依序判斷，只執行第一個成立的分支。","match 從 Python 3.10 起提供結構模式比對；它不是 C++ switch 的完全對應。","pass 是空敘述，可作為尚無內容的區塊，但不會自動完成任何工作。"],
 ["錯誤：elif 前面沒有 if → SyntaxError。修正：建立完整的條件鏈。","錯誤：case name 以為在比較既有變數 → 可能是擷取模式。修正：理解常值、擷取與限定名稱模式的差異。"], ["conditions","control-flow"],"python_conditions","設計課程進度分級，測試每條分支與邊界；match 的預設分支使用 _。",["if 和 elif 都成立時會執行兩個區塊嗎？","不會，只執行第一個成立的分支。"]);
P("P11","Loops and Range","迴圈與 range",'total = 0\nfor minutes in range(10, 31, 10):\n    total += minutes\nprint(total)\ncount = 0\nwhile count < 2:\n    print(count)\n    count += 1\n',
 ["for 逐一取得可迭代物件的元素；range 的 stop 不包含在結果內。","while 依條件重複執行；停止條件與狀態更新缺一不可。","continue 與 break 影響最近一層迴圈；迴圈 else 只在未經 break 結束時執行。"],
 ["錯誤：range(1,5) 以為包含 5 → 只得到 1 到 4。修正：明確設計半開區間。","錯誤：continue 跳過 while 的計數更新 → 可能無限迴圈。修正：確認所有路徑都能前進。"], ["loops","control-flow"],"python_for_loops","累計等差練習時間，測試正向、反向與空 range，不使用自訂函式。",["range(5,1,-1) 的最後一個數字是什麼？","2；終點 1 不包含在內。"]);
P("P12","Object References and Mutability","物件參照、可變性與複製",'import copy\noriginal = [[10], [20]]\nalias = original\nshallow = original.copy()\ndeep = copy.deepcopy(original)\noriginal[0].append(15)\nprint(alias is original)\nprint(shallow[0], deep[0])\n',
 ["指定名稱不等於複製物件；== 比較值，is 比較是否為同一物件。","淺複製只建立外層容器，內層參照仍共用；深複製則遞迴複製適合複製的組成物件。","id 代表物件生命週期內的身分識別值，不應在 Python 程式中當成可操作的記憶體指標。"],
 ["錯誤：b = a 後修改 b，卻期待 a 不變。修正：依是否含巢狀可變物件選擇淺複製或深複製。","錯誤：用 is 代替 == 比較兩份清單 → 即使值相同也可能為 False。修正：先分清楚要比較值還是身分。"], ["references","memory","collections"],"python_lists_copy","建立巢狀學習紀錄，分別以別名、淺複製與深複製更新內層，再比較結果。",["對含 list 的 list 使用 copy()，內層 list 是否也各自獨立？","不是，淺複製仍共用內層物件。"]);
P("P13","Functions and Arguments","函式、參數與可變預設值",'def add_session(minutes, history=None):\n    if history is None:\n        history = []\n    history.append(minutes)\n    return history\n\nprint(add_session(20))\nprint(add_session(35))\n',
 ["函式參數綁定傳入的物件；修改可變物件可能反映到呼叫端，重新綁定參數則不同。","預設引數在函式定義時求值；可變預設物件可能在多次呼叫間共用。","*args 收集位置引數，**kwargs 收集關鍵字引數；介面仍應優先保持清楚。"],
 ["錯誤：def f(items=[]): items.append(...) → 呼叫間累積狀態。修正：以 None 為預設值並在函式內新建串列。","錯誤：參數名稱重新綁定後期待呼叫端名稱也被改綁。修正：透過回傳值或明確修改物件交換結果。"], ["functions","references"],"python_functions","建立可選擇是否沿用既有紀錄的函式，測試兩次無參數容器呼叫是否互相獨立。",["Python 的預設參數每次呼叫都重新建立嗎？","不會；預設運算式在定義函式時求值。"]);
P("P14","Scope Lambdas and Recursion","作用域、Lambda 與遞迴",'def countdown_total(n):\n    if n <= 0:\n        return 0\n    return n + countdown_total(n - 1)\n\nadjust = lambda minutes: minutes + 5\nprint(countdown_total(4), adjust(20))\n',
 ["名稱查找依區域、外層函式、全域與內建範圍進行；指定名稱可能使它成為區域名稱。","lambda 只能包含單一運算式，複雜邏輯應使用 def。","遞迴需要終止條件且受遞迴深度限制，不適合無限制的深層輸入。"],
 ["錯誤：函式內先讀後指定同名全域名稱 → 可能 UnboundLocalError。修正：優先以參數傳值，確有需要才使用 global。","錯誤：遞迴沒有終止條件 → RecursionError。修正：定義最小問題並確認每次呼叫會靠近它。"], ["functions","recursion","lambdas"],"python_scope","分別用迴圈與遞迴累計相同範圍；為 0、1 與負值定義一致行為。",["lambda 適合放多行複雜流程嗎？","不適合；改用具名函式較清楚。"]);
P("P15","Classes and Initialization","類別、物件、self 與 __init__",'class Session:\n    def __init__(self, minutes):\n        self.minutes = minutes\n\nfirst = Session(20)\nsecond = Session(35)\nprint(first.minutes, second.minutes)\n',
 ["class 定義型別，建立實例後可儲存與該實例相關的屬性。","__init__ 初始化已建立的實例；self 是慣用的第一個實例方法參數名稱。","每個實例的狀態應在實例上初始化，避免意外共用可變類別屬性。"],
 ["錯誤：方法漏寫 self → 呼叫時引數數量不符。修正：實例方法明確接收實例。","錯誤：把 history=[] 放在類別層級當成每個人的獨立紀錄 → 實例共用清單。修正：在 __init__ 建立 self.history。"], ["oop","classes","constructors"],"python_classes","建立兩個 Session 實例，為各自建立紀錄並驗證彼此不會共用清單。",["self 是 Python 保留字嗎？","不是，但應遵循慣例使用 self。"]);
P("P16","Methods Properties and Magic Methods","方法、屬性與特殊方法",'class Session:\n    def __init__(self, minutes):\n        self.minutes = minutes\n    def extend(self, extra):\n        self.minutes += extra\n    def __str__(self):\n        return f"{self.minutes} min"\n    def __repr__(self):\n        return f"Session({self.minutes})"\n    def __eq__(self, other):\n        if not isinstance(other, Session):\n            return NotImplemented\n        return self.minutes == other.minutes\n\nsession = Session(20)\nsession.extend(5)\nprint(session, repr(session), session == Session(25))\n',
 ["屬性保存狀態，方法描述操作；方法可以更新實例或回傳查詢結果。","__str__ 偏向易讀顯示，__repr__ 偏向除錯表示，兩者都必須回傳字串。","__eq__ 定義值相等的語意；對不支援的比較型別可回傳 NotImplemented。"],
 ["錯誤：__str__ 回傳 int → TypeError。修正：回傳字串。","錯誤：__eq__ 直接讀取任意 other.minutes → 可能 AttributeError。修正：先處理不支援的型別。"], ["oop","methods","magic-methods"],"python_class_methods","為 Session 定義易讀顯示、除錯表示與值相等；比較相同值、不同值與不同型別。",["a == b 與 a is b 是否都由 __eq__ 決定？","不是；只有 == 使用相等比較協定，is 比較物件身分。"]);
P("P17","Inheritance Polymorphism and Encapsulation","繼承、多型與封裝",'class Session:\n    def __init__(self, minutes):\n        self._minutes = minutes\n    def label(self):\n        return "session"\n\nclass Practice(Session):\n    def label(self):\n        return f"practice: {self._minutes} min"\n\nprint(Practice(30).label())\n',
 ["衍生類別可覆寫方法，super 可沿方法解析順序呼叫上層實作。","多型讓相同呼叫介面適用於不同物件；Python 不要求所有情境都共享同一個基底類別。","單底線是非公開介面的慣例；雙底線名稱改寫也不是安全邊界。"],
 ["錯誤：衍生 __init__ 忘記初始化基底需要的狀態 → 方法可能找不到屬性。修正：適當呼叫 super().__init__。","錯誤：把 _name 當成外部完全無法存取。修正：以介面與約定管理封裝，不把它當成權限控制。"], ["oop","inheritance","polymorphism"],"python_inheritance","建立兩種課程物件，讓相同 label 呼叫產生不同顯示；加入無效時間的處理規則。",["Python 需要在方法前加 virtual 才能覆寫嗎？","不需要；一般實例方法可由衍生類別重新定義。"]);
const H = (...args) => add("php",...args);
H("H01","Environment and Syntax","PHP 環境與語法",'<?php\n// CLI 範例，不需要 Web 伺服器\necho "Study log", PHP_EOL;\n',
 ["PHP 可以由命令列執行，也可以經由 Web 伺服器處理請求；兩者的輸入來源不同。","程式以 <?php 開始，敘述通常以分號結束；純 PHP 檔可省略結尾標記。","CLI 範例使用 php main.php；不要把伺服器執行結果與瀏覽器看到的 HTML 原始碼混淆。"],
 ["錯誤：直接用瀏覽器開啟本機 PHP 檔，期待執行程式。修正：使用 PHP CLI 或正確設定的伺服器。","錯誤：在純 PHP 檔結尾標記後留下額外空白 → 可能產生非預期輸出。修正：省略結尾標記。"], ["syntax","setup"],"php_syntax","建立 CLI 學習日誌，輸出三行資料，再確認註解不會出現在輸出中。",["GitHub Pages 能直接執行 PHP 嗎？","不能；它提供靜態檔案託管，PHP 需要另外的執行環境。"]);
H("H02","Variables Scope and Output","變數、作用域與輸出",'<?php\n$minutes = 25;\n$label = "Practice";\necho $label . ": " . $minutes . PHP_EOL;\n',
 ["變數以 $ 開頭且名稱區分大小寫；型別由所持的值決定。","echo 可輸出多個運算式，print 為具有回傳值的運算式；一般輸出不需要利用這個差異。","函式內外的變數有作用域差異；狀態應優先透過參數與回傳值交換。"],
 ["錯誤：變數名稱漏寫 $ → 解析或名稱錯誤。修正：確認變數語法。","錯誤：把函式外變數當成函式內自動可見。修正：傳入參數，而非依賴隱藏的全域狀態。"], ["variables","input-output"],"php_variables","輸出課程名稱與分鐘數，分別使用字串插值與串接，確認結果一致。",["$Name 與 $name 相同嗎？","不同；PHP 變數名稱區分大小寫。"]);
H("H03","Types Casting and Constants","型別、轉型與常數",'<?php\nconst TARGET = 60;\n$minutes = (int) "25";\necho get_debug_type($minutes), PHP_EOL;\necho TARGET - $minutes, PHP_EOL;\n',
 ["PHP 區分 int、float、string、bool、array、object 與 null 等型別。","明確轉型能表達意圖，但轉型不是輸入驗證，必須另外判斷原資料格式。","const 定義固定名稱；魔術常數的值依所在檔案、行號或程式範圍決定。"],
 ["錯誤：把任意字串轉為 int 後就認定輸入有效。修正：轉型之前先驗證允許的格式。","錯誤：把浮點數的近似值當成精確金額。修正：依用途選擇以最小貨幣單位的整數等表示方式。"], ["types","conversion"],"php_datatypes","比較數字字串、空字串與帶字母字串的型別，為可接受輸入訂出驗證規則。",["常數名稱也需要 $ 嗎？","不需要；它不是變數。"]);
H("H04","Strings","字串串接與處理",'<?php\n$title = " php notes ";\n$clean = trim($title);\necho strtoupper($clean), PHP_EOL;\necho strlen($clean), PHP_EOL;\n',
 [". 是字串串接運算子；+ 用於數值運算，不應拿來串接文字。","雙引號支援常見跳脫與變數插值，單引號的插值與跳脫規則較少。","strlen 對一般字串計算位元組數；處理多位元組文字需另外選擇適當工具。"],
 ["錯誤：以 + 串接文字 → 不是預期的字串操作。修正：改用 .。","錯誤：以 strlen 當成中文字數 → UTF-8 字元可能占多個位元組。修正：依編碼選擇相應的字元處理函式。"], ["strings"],"php_string","整理一段課程標題的前後空白，輸出大寫版與位元組長度，再測試中文字串。",["單引號中的 $name 會自動插值嗎？","不會。"]);
H("H05","Operators and Strict Comparison","運算子與嚴格比較",'<?php\n$text = "12";\n$number = 12;\nvar_export($text == $number);\necho PHP_EOL;\nvar_export($text === $number);\necho PHP_EOL;\n',
 ["== 會依規則進行型別轉換比較，=== 同時要求型別與值相同。","&& 與 || 具有短路求值；避免把邏輯判斷寫成難以理解的指定運算。","串接與算術混用時加括號，不要依靠跨版本容易誤讀的優先序假設。"],
 ["錯誤：在需要精確型別時使用 == → 可能接受意外的輸入。修正：使用 === 並先驗證型別。","錯誤：if ($value = 0) → 將變數改為 0。修正：比較使用 == 或 ===。"], ["operators","types"],"php_operators","為 0、'0'、false、null 建立比較矩陣，說明何時必須使用嚴格比較。",["'12' === 12 會成立嗎？","不會，兩者型別不同。"]);
H("H06","Conditions Switch and Match","條件、switch 與 match",'<?php\n$level = 2;\nif ($level >= 3) { echo "advanced", PHP_EOL; }\nelseif ($level === 2) { echo "practice", PHP_EOL; }\nelse { echo "review", PHP_EOL; }\necho match ($level) { 2 => "two", default => "other" }, PHP_EOL;\n',
 ["if/elseif/else 依序選擇分支；巢狀條件應以大括號明確界定。","PHP 8 的 match 是運算式，使用嚴格比較，且沒有 switch 的貫穿行為。","match 必須涵蓋傳入值或提供 default；switch 與 match 的比較語意不能視為相同。"],
 ["錯誤：match 沒有對應分支也沒有 default → UnhandledMatchError。修正：完整涵蓋輸入。","錯誤：把 switch 漏寫 break 視為自動跳出。修正：明確結束每個分支。"], ["conditions","control-flow"],"php_if_else","建立課程狀態選單，用 if 與 match 實作同一組規則，測試未知狀態。",["match 使用 == 還是 === 語意？","採嚴格比較語意。"]);
H("H07","Loops","迴圈與逐筆處理",'<?php\n$total = 0;\nfor ($i = 1; $i <= 4; $i++) { $total += $i; }\necho $total, PHP_EOL;\n$n = 0;\ndo { $n++; } while ($n < 1);\necho $n, PHP_EOL;\n',
 ["while 先檢查條件，do-while 先執行；for 將初始化、條件與更新放在一起。","foreach 用於走訪陣列與可迭代資料，鍵與值可同時取得；陣列細節在 H09。","break 與 continue 會改變流程，必須確認每條路徑都能到達停止條件。"],
 ["錯誤：for 條件使用不可能結束的更新方向 → 無限迴圈。修正：驗證每次更新會接近邊界。","錯誤：while 中 continue 跳過更新。修正：將必要更新放到所有路徑都會執行的位置。"], ["loops","control-flow"],"php_looping","累計每日練習次數，測試空區間與單一元素區間，再比較 while 與 do-while。",["do-while 即使條件為 false，仍會先執行一次嗎？","會。"]);
H("H08","Functions and References","函式與參照",'<?php\nfunction addMinutes(int &$minutes, int $extra): void { $minutes += $extra; }\n$value = 20;\naddMinutes($value, 15);\necho $value, PHP_EOL;\n',
 ["函式的參數與回傳值定義資料流；型別宣告有助於表達介面。","& 參數讓函式透過參照更新呼叫端變數；呼叫時不用再加 &。","PHP 參照是變數別名的機制，不能直接等同於 C++ 可解參照的記憶體指標。"],
 ["錯誤：呼叫 addMinutes(&$value, 5) → 不合現代 PHP 呼叫語法。修正：& 放在參數宣告。","錯誤：只需回傳結果卻大量使用參照修改狀態。修正：先選擇清楚的回傳值介面，必要時才修改呼叫端。"], ["functions","references"],"php_functions","分別用回傳值與參照更新學習分鐘數，比較兩種介面的可讀性與副作用。",["PHP 的參照可以做位址算術嗎？","不可以；它不是 C/C++ 的指標。"]);
H("H09","Arrays","PHP 有序映射陣列",'<?php\n$minutes = ["cpp" => 25, "python" => 35];\n$minutes["sql"] = 20;\nforeach ($minutes as $language => $value) {\n    echo $language, ": ", $value, PHP_EOL;\n}\necho array_sum($minutes), PHP_EOL;\n',
 ["PHP array 是有序映射，可使用整數或字串鍵；它不只是連續整數索引的容器。","部分看似不同的鍵會經型別轉換後碰撞，設計鍵值時要明確。","foreach 的鍵與值、排序是否保留鍵、複製與參照都是不同操作。"],
 ["錯誤：把排序後的鍵變動當成資料遺失。修正：依是否需要保留鍵選擇 sort、asort 等函式。","錯誤：foreach 以參照走訪後忘記解除最後一個參照。修正：完成後 unset 迴圈參照變數。"], ["arrays","collections","loops"],"php_arrays","用語言代號保存練習時間，新增資料、計算合計，排序時保留語言鍵。",["PHP array 的鍵只能是連續整數嗎？","不是，也可以使用字串鍵。"]);
H("H10","Classes and Object Lifecycle","類別、建構與解構",'<?php\nclass Session {\n    public function __construct(public int $minutes) {}\n    public function label(): string { return $this->minutes . " min"; }\n}\n$session = new Session(25);\necho $session->label(), PHP_EOL;\n',
 ["class 定義物件型別，new 建立實例，-> 存取實例的屬性與方法。","__construct 負責初始化；範例的建構子屬性提升需要 PHP 8 以上。","__destruct 不應當成所有重要儲存動作的唯一保證，生命週期與結束時機仍需注意。"],
 ["錯誤：以 . 呼叫物件方法 → . 是字串串接。修正：使用 ->。","錯誤：方法內漏寫 $this->，以為區域變數就是屬性。修正：清楚區分物件狀態與區域名稱。"], ["oop","classes","constructors"],"php_oop_classes_objects","建立兩個課程實例，各自保存分鐘數並提供文字摘要，不共用可變狀態。",["$this 代表類別名稱還是目前實例？","目前正在執行方法的實例。"]);
H("H11","Access Modifiers and Inheritance","存取修飾與繼承",'<?php\nclass Session {\n    public function __construct(protected int $minutes) {}\n}\nclass Practice extends Session {\n    public function label(): string { return "practice: " . $this->minutes; }\n}\necho (new Practice(30))->label(), PHP_EOL;\n',
 ["public、protected、private 決定成員可由哪些範圍存取。","extends 建立單一類別繼承；衍生類別可以擴充或覆寫合適的方法。","覆寫方法要維持相容的介面，不應任意縮小公開存取權限。"],
 ["錯誤：由子類別直接存取父類別 private 屬性。修正：改經由父類別介面，或在設計合理時使用 protected。","錯誤：子類別自訂建構子卻忘記父類別初始化需求。修正：明確呼叫 parent::__construct。"], ["oop","inheritance","encapsulation"],"php_oop_inheritance","為兩種課程繼承共用狀態並提供各自摘要，驗證無效分鐘數不會進入物件。",["PHP 類別可以同時 extends 兩個類別嗎？","不可以；多個能力契約可用介面表達。"]);
H("H12","Abstract Classes and Interfaces","抽象類別與介面",'<?php\ninterface Describable { public function label(): string; }\nabstract class Session implements Describable {\n    public function __construct(protected int $minutes) {}\n    abstract public function label(): string;\n}\nclass Practice extends Session {\n    public function label(): string { return "practice: " . $this->minutes; }\n}\necho (new Practice(30))->label(), PHP_EOL;\n',
 ["抽象類別可共享實作並保留必須由子類別完成的方法，不能直接實例化。","介面定義能力契約；一個類別可實作多個介面。","呼叫端依介面操作物件，能降低對特定實作類別的依賴。"],
 ["錯誤：new 抽象類別 → 執行錯誤。修正：建立完成必要方法的具體類別。","錯誤：implements 後遺漏必要方法或寫錯簽名。修正：完整實作契約並維持型別相容。"], ["oop","interfaces","polymorphism"],"php_oop_interfaces","定義具有 label 契約的兩種學習活動，透過同一介面顯示不同摘要。",["一個類別可以實作多個介面嗎？","可以，但必須滿足各介面的相容契約。"]);
const cs = (body, declarations = "") => `using System;\n${body}\n${declarations}\n`;
const S = (...args) => add("csharp",...args);
S("S01","Environment Syntax and Output","C# 環境、語法與輸出",cs('Console.WriteLine("Study log");\nConsole.WriteLine(2 + 3);'),
 [".NET SDK 提供建立、編譯與執行工具；SDK 與應用程式執行階段的角色不同。","此處使用主控台專案與頂層敘述，入口程式由編譯器建立。","敘述以分號結束；Console.WriteLine 在輸出後換行，Write 則不會。"],
 ["錯誤：只安裝 runtime 就期待能 dotnet build。修正：安裝對應 SDK。","錯誤：Console 或 WriteLine 大小寫寫錯 → 編譯失敗。修正：遵守 C# 名稱大小寫。"], ["setup","syntax","dotnet"],"cs_syntax","建立 net10.0 主控台專案，分別以 Write 與 WriteLine 排列三行資訊。",["頂層敘述代表程式不需要入口點嗎？","仍有入口點，只是由編譯器產生。"]);
S("S02","Variables Types and Input","變數、型別、轉型與輸入",cs('string text = Console.ReadLine() ?? "0";\nint minutes = int.Parse(text);\ndouble hours = minutes / 60.0;\nConsole.WriteLine($"{minutes} min = {hours:F2} h");'),
 ["C# 是靜態型別語言；var 會推導型別，不是任意改型別的動態變數。","Console.ReadLine 回傳字串或 null，需要依輸入結束情況處理。","Parse 可能丟出例外；面對不可信輸入，後續 GUI 單元以 TryParse 驗證。"],
 ["錯誤：將 ReadLine 結果直接指定給 int → 型別不符。修正：解析並處理失敗。","錯誤：var x = 3 後指定 x = 'text' → 型別已固定。修正：依用途宣告正確型別。"], ["types","conversion","input-output"],"cs_data_types","輸入學習分鐘數並顯示小時，加入空輸入與非數字測試，再說明 Parse 的限制。",["var 可以省略初始化嗎？","一般區域 var 宣告不能，編譯器需要初始化運算式推導型別。"],{input:"90\n"});
S("S03","Operators Strings and Booleans","運算子、字串與布林",cs('int minutes = 25;\nstring language = "C#";\nbool complete = minutes >= 20 && minutes <= 60;\nConsole.WriteLine($"{language}: {minutes} min, ready={complete}");\nConsole.WriteLine(language.Length);'),
 ["整數除法會截去小數部分；格式化輸出不會改變先前運算的型別。","字串不可變，方法通常回傳新字串；插值字串能清楚表達格式。","&& 與 || 短路求值；條件必須是 bool，不能直接把一般整數當成條件。"],
 ["錯誤：double hours = minutes / 60 → 先做整數除法。修正：使用 60.0 或先轉型。","錯誤：以為 Trim() 原地修改字串 → 忽略回傳值。修正：接收新字串。"], ["operators","strings","types"],"cs_operators","建立語言名稱與時間摘要，比較原字串與 Trim、ToUpper 等方法的回傳值。",["if (1) 在 C# 合法嗎？","不合法，if 條件必須是 bool。"]);
S("S04","Control Flow and Loops","條件與迴圈",cs('int total = 0;\nfor (int day = 1; day <= 3; day++) total += day * 10;\nif (total >= 60) Console.WriteLine("target reached");\nelse Console.WriteLine("keep practicing");\nConsole.WriteLine(total);'),
 ["if/else 與 switch 選擇分支；大括號能避免條件配對與縮排誤解。","for、while、do-while 與 foreach 適合不同的重複規則。","break 結束最近一層迴圈或 switch，continue 進入下一輪。"],
 ["錯誤：for 上界多寫一次 → 陣列走訪時可能越界。修正：使用半開區間並測試邊界。","錯誤：while 中忘記更新條件 → 可能無限執行。修正：驗證每條分支都能前進。"], ["control-flow","loops","conditions"],"cs_conditions","依每日練習分鐘數累計週進度，測試 0 天、1 天與達標邊界。",["do-while 與 while 的最少執行次數相同嗎？","不同，前者至少 1 次，後者可為 0 次。"]);
S("S05","Arrays","陣列與排序",cs('int[] minutes = { 30, 15, 25 };\nArray.Sort(minutes);\nint total = 0;\nforeach (int value in minutes) total += value;\nConsole.WriteLine(string.Join(", ", minutes));\nConsole.WriteLine(total);'),
 ["陣列建立後長度固定；Length 是元素數，不是最後索引。","Array.Sort 原地排序；需要保留原順序時先建立副本。","多維陣列用各維度長度走訪，不能把總 Length 當成每一維的上界。"],
 ["錯誤：取 values[values.Length] → IndexOutOfRangeException。修正：有效索引小於 Length。","錯誤：Array.Sort 後期待原陣列順序保留。修正：排序前先複製。"], ["arrays","collections","loops"],"cs_arrays","整理一週時間，輸出排序結果與合計，同時保留原始記錄。",["int[3] 建立後，未指定的元素值為何？","0；C# 陣列元素會使用型別的預設值初始化。"]);
S("S06","Methods and Parameters","方法、參數與多載",cs('Console.WriteLine(Total(3));\nConsole.WriteLine(Total(2, 15));\nstatic int Total(int sessions, int minutes = 20) => sessions * minutes;'),
 ["方法把參數與回傳值組成介面；void 表示不回傳資料。","預設參數可減少重複指定，但不應讓呼叫語意變得模糊。","多載依參數列表區分；一般參數傳值，ref/out 會改變資料交換方式。"],
 ["錯誤：只改回傳型別就宣告同名同參數方法 → 編譯失敗。修正：改變參數介面或命名。","錯誤：忽略回傳值卻期待呼叫端變數自動更新。修正：接收回傳值或明確使用 ref/out。"], ["functions","methods"],"cs_methods","建立計算總練習時間的方法，提供預設時間並測試 0 次練習的行為。",["void 方法可以 return 一個 int 嗎？","不可以；回傳型別與 return 必須一致。"]);
S("S07","Classes Properties and Exceptions","類別、屬性與例外",cs('var session = new Session(25);\nConsole.WriteLine(session.Minutes);\ntry { _ = new Session(-1); }\ncatch (ArgumentOutOfRangeException) { Console.WriteLine("invalid minutes"); }', 'class Session { public int Minutes { get; } public Session(int minutes) { if (minutes < 0) throw new ArgumentOutOfRangeException(nameof(minutes)); Minutes = minutes; } }'),
 ["類別整合狀態與行為；建構子負責建立有效的初始狀態。","屬性是對外資料介面，可將 getter 與 setter 的權限分開。","例外用來表達無法正常完成的情況；只攔截能合理處理的錯誤，不要悄悄吞掉問題。"],
 ["錯誤：公開欄位無條件接受無效值 → 物件失去不變條件。修正：在建構子或屬性入口驗證。","錯誤：catch 後什麼也不做 → 隱藏真正失敗。修正：回報或轉換成清楚的處理結果。"], ["oop","classes","exceptions"],"cs_classes","建立有合法時間範圍的課程類別，測試有效、負數與超大輸入並記錄例外類型。",["只讀屬性代表物件裡所有資料都不可變嗎？","不代表；仍需檢查其他成員及所參照物件。"]);
S("S08","Inheritance Polymorphism and Interfaces","繼承、多型、抽象與介面",cs('ILabel current = new Practice(30);\nConsole.WriteLine(current.Label());', 'interface ILabel { string Label(); }\nabstract class Session : ILabel { protected int Minutes; protected Session(int minutes) { Minutes = minutes; } public abstract string Label(); }\nclass Practice : Session { public Practice(int minutes) : base(minutes) {} public override string Label() => $"practice: {Minutes}"; }'),
 ["繼承以基底型別表達共通介面；override 覆寫可覆寫的方法。","抽象類別可共享狀態，介面定義能力契約；一個類別可實作多個介面。","WinForms 的視窗繼承 Form，Razor PageModel 也有基底類別；介面則常用於依賴注入。"],
 ["錯誤：用 new 隱藏方法卻期待 override 的多型結果。修正：分清楚隱藏與覆寫。","錯誤：忘記實作介面成員 → 編譯失敗。修正：保持完整而相容的公開契約。"], ["oop","inheritance","interfaces","polymorphism"],"cs_interface","建立兩種 Session 實作同一個 ILabel，讓呼叫端不需要知道具體型別。",["C# 可以同時繼承兩個 class 嗎？","不可以，但可以實作多個介面。"]);
S("S09","Windows Forms Essentials","WinForms 專案、控制項與事件",String.raw`using System;
using System.Windows.Forms;
internal static class Program {
    [STAThread]
    static void Main() {
        ApplicationConfiguration.Initialize();
        Application.Run(new StudyForm());
    }
}
public class StudyForm : Form {
    private readonly Label status = new() { Text = "Ready", Top = 60, AutoSize = true };
    public StudyForm() {
        Text = "Study timer";
        var button = new Button { Text = "Start", Top = 15 };
        button.Click += HandleStart;
        Controls.Add(button);
        Controls.Add(status);
    }
    private void HandleStart(object? sender, EventArgs e) { status.Text = "Started"; }
}`,
 ["WinForms 是 Windows 桌面 UI 框架；專案目標需要 net10.0-windows 與 UseWindowsForms。","Designer 產生介面初始化程式；不宜把所有程式邏輯都寫入自動產生的檔案。","事件驅動由使用者操作觸發處理方法，Application.Run 維持訊息迴圈。"],
 ["錯誤：建立控制項但沒有加入 Controls → 視窗不會顯示它。修正：加入正確父容器。","錯誤：在 UI 事件中長時間阻塞 → 視窗無法回應。修正：拆分工作，避免卡住 UI 執行緒。"], ["dotnet","winforms","events"],"winforms","製作學習計時器視窗：有開始按鈕與狀態標籤；點擊前後文字必須不同，視窗可正常關閉。",["WinForms 範例能直接在 GitHub Pages 執行嗎？","不能；它是 Windows 桌面程式。"],{kind:"winforms"});
S("S10","Windows Forms Input Validation","WinForms 輸入驗證",String.raw`using System;
using System.Windows.Forms;
internal static class Program {
    [STAThread] static void Main() { ApplicationConfiguration.Initialize(); Application.Run(new StudyForm()); }
}
public class StudyForm : Form {
    private readonly TextBox input = new() { Top = 10 };
    private readonly ListBox log = new() { Top = 80, Height = 120 };
    public StudyForm() {
        var add = new Button { Text = "Add", Top = 40 };
        add.Click += AddEntry;
        Controls.AddRange(new Control[] { input, add, log });
    }
    private void AddEntry(object? sender, EventArgs e) {
        if (!int.TryParse(input.Text, out int minutes) || minutes <= 0) {
            MessageBox.Show("Enter a positive whole number.");
            return;
        }
        log.Items.Add($"{minutes} min");
        input.Clear();
    }
}`,
 ["使用 TryParse 讓可預期的格式錯誤成為分支，而不是靠例外控制正常流程。","解析成功不代表資料符合業務範圍，例如練習時間仍必須大於零。","控制項狀態與資料模型應保持一致；只有驗證通過才加入記錄。"],
 ["錯誤：int.Parse 接收文字 'abc' → 例外。修正：先用 TryParse。","錯誤：只驗證是數字，接受 -5 分鐘。修正：再檢查合理範圍並給明確提示。"], ["dotnet","winforms","validation"],"winforms","製作時間記錄器：TextBox 輸入、Button 新增、ListBox 顯示；空白、abc、0、負數都不能讓程式崩潰。",["TryParse 回傳 true 就代表分鐘數一定合理嗎？","不代表；還要驗證範圍。"],{kind:"winforms"});
S("S11","Razor Pages Essentials","Razor Pages 與請求流程",String.raw`var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
var app = builder.Build();
app.MapRazorPages();
app.Run();`,
 ["Razor Pages 以頁面為中心：.cshtml 放 UI，PageModel 放處理邏輯。","@page 讓 Razor 檔成為可處理請求的頁面；OnGet 與 OnPost 對應不同 HTTP 方法。","需要伺服器才能執行 ASP.NET Core；GitHub Pages 只能展示靜態說明與截圖。"],
 ["錯誤：只建立 .cshtml，忘記 @page 或 MapRazorPages → 路由不如預期。修正：確認服務註冊、路由與頁面宣告。","錯誤：以 GET 執行具有副作用的資料修改。修正：將修改放到適當的 POST 流程並保留防偽驗證。"], ["dotnet","razor-pages","web"],"razor","建立首頁顯示學習日誌與新增表單；分開處理 GET 與 POST，驗證空標題不會成功新增。",["Razor Pages 是只在瀏覽器執行的前端框架嗎？","不是；它需要 ASP.NET Core 伺服器。"],{kind:"razor"});
S("S12","Razor Pages EF Core and SQLite","Razor Pages、EF Core 與 SQLite",String.raw`using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
builder.Services.AddDbContext<StudyContext>(options =>
    options.UseSqlite("Data Source=study.db"));
var app = builder.Build();
app.MapRazorPages();
app.Run();
public class StudyContext(DbContextOptions<StudyContext> options) : DbContext(options) {
    public DbSet<StudySession> Sessions => Set<StudySession>();
}
public class StudySession {
    public int Id { get; set; }
    public string Topic { get; set; } = "";
    public int Minutes { get; set; }
}`,
 ["DbContext 追蹤資料變更，DbSet 表達實體集合；實際持久化需要 SaveChanges。","SQLite provider、EF Core 工具與目標框架版本要相容；migration 需要經過檢查再套用。","先將單表 CRUD 與輸入驗證做好，再延伸成 SQL 單元的三表與多對多關聯。"],
 ["錯誤：修改追蹤中的物件卻沒有 SaveChanges → 資料庫沒有持久化。修正：在完成驗證後明確儲存。","錯誤：把本機 SQLite 檔提交到公開儲存庫。修正：以合成測試資料示範，將實際資料庫與機密設定排除。"], ["dotnet","razor-pages","databases","sqlite"],"efcore","建立可新增、列表、編輯與刪除的學習紀錄網站；重啟後資料仍保留，錯誤輸入不能入庫。",["DbSet.Add 後資料是否立即寫入磁碟？","不是，通常要在 SaveChanges 或對應非同步方法成功後才持久化。"],{kind:"efcore"});
export const sqlFixture = `PRAGMA foreign_keys = ON;
CREATE TABLE students (student_id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE);
CREATE TABLE courses (course_id INTEGER PRIMARY KEY, title TEXT NOT NULL, credits INTEGER NOT NULL CHECK (credits BETWEEN 1 AND 4));
CREATE TABLE enrollments (student_id INTEGER NOT NULL, course_id INTEGER NOT NULL, grade INTEGER, PRIMARY KEY(student_id,course_id), FOREIGN KEY(student_id) REFERENCES students(student_id), FOREIGN KEY(course_id) REFERENCES courses(course_id));
INSERT INTO students VALUES (1,'Lina','lina@example.invalid'),(2,'Noah','noah@example.invalid'),(3,'Mia',NULL);
INSERT INTO courses VALUES (10,'C++',3),(20,'SQL',2);
INSERT INTO enrollments VALUES (1,10,85),(1,20,95),(2,10,70);
`;
const Q = (...args) => add("sql",...args);
Q("Q01","SQL Basics and Select","SQL 基礎與 SELECT",'SELECT name FROM students;\nSELECT DISTINCT credits FROM courses;',
 ["SQL 以集合方式描述需要的資料，SELECT 選欄位，FROM 指定資料來源。","DISTINCT 去除選出欄位組合中的重複資料，不等於替資料表建立唯一約束。","沒有 ORDER BY 的結果不保證順序；本單元先專注選取欄位與去重。"],
 ["錯誤：以為 SELECT * 的欄位永遠不變。修正：需要穩定介面時列出欄位。","錯誤：把輸出順序當成資料表的永久特性。修正：需要順序時在 Q02 使用 ORDER BY。"], ["sql","queries"],"sql_select","選出學生姓名與課程學分，觀察 DISTINCT 影響的是一欄還是整組欄位。",["DISTINCT 會刪除資料表中的重複記錄嗎？","不會，它影響本次查詢結果。"]);
Q("Q02","Filtering Sorting and Null","篩選、排序與 NULL",'SELECT name FROM students WHERE email IS NULL ORDER BY name;\nSELECT title FROM courses WHERE credits BETWEEN 2 AND 3 ORDER BY credits DESC, title;',
 ["WHERE 篩選資料列；AND、OR 混用時以括號表達真正的邏輯。","NULL 表示未知或缺值，應使用 IS NULL，而不是 = NULL。","ORDER BY 可指定多個排序鍵；BETWEEN 包含兩端，LIKE 的萬用字元與跳脫方式需留意方言。"],
 ["錯誤：email = NULL → 不會得到一般相等比較的 true。修正：使用 IS NULL。","錯誤：混用 AND/OR 卻忽略優先序 → 篩出多餘資料。修正：將每組條件加括號並測試。"], ["sql","queries","filtering"],"sql_where","列出有聯絡信箱與沒有信箱的學生，並為同學分課程加入次要排序鍵。",["BETWEEN 2 AND 3 是否包含 2 與 3？","包含兩端。"]);
Q("Q03","Insert Update Delete and Limits","資料新增、更新、刪除與筆數限制",'INSERT INTO students(student_id,name,email) VALUES (4,\'Eli\',NULL);\nUPDATE students SET name = \'Eli Chen\' WHERE student_id = 4;\nSELECT student_id,name FROM students ORDER BY student_id LIMIT 2;\nDELETE FROM students WHERE student_id = 4;',
 ["INSERT 明確列出欄位可避免依賴資料表欄位順序。","UPDATE 與 DELETE 的 WHERE 決定影響範圍；執行前先用同條件 SELECT 檢查。","SQLite/MySQL 使用 LIMIT，SQL Server 常用 TOP 或 OFFSET/FETCH，不能直接混貼。"],
 ["錯誤：UPDATE 漏寫 WHERE → 可能更新所有資料列。修正：先確認條件與預期筆數。","錯誤：限制筆數卻沒有 ORDER BY → 取得的那幾筆不具穩定定義。修正：先定義排序再限制。"], ["sql","crud","databases"],"sql_insert","在記憶體測試資料庫新增一筆課程、更新它，再只刪除那筆；每一步檢查影響範圍。",["DELETE FROM students 沒有 WHERE 會只刪第一筆嗎？","不會，它會嘗試刪除所有資料列。"]);
Q("Q04","Aggregates Group By and Having","彙總、分組與 HAVING",'SELECT course_id, COUNT(*) AS enrollments, ROUND(AVG(grade),1) AS average_grade\nFROM enrollments\nGROUP BY course_id\nHAVING COUNT(*) >= 1\nORDER BY course_id;',
 ["COUNT、SUM、AVG、MIN、MAX 將多筆資料彙總；COUNT(column) 不計 NULL。","GROUP BY 決定分組鍵；非彙總欄位應符合目標資料庫的分組規則。","WHERE 在分組前篩資料列，HAVING 在分組後篩群組。"],
 ["錯誤：WHERE COUNT(*) > 1 → 彙總階段不對。修正：將群組條件放在 HAVING。","錯誤：用 COUNT(grade) 當成所有報名人數 → 缺成績者不計。修正：依需求使用 COUNT(*)。"], ["sql","aggregation","queries"],"sql_groupby","依課程統計報名人數與平均成績，加入一筆 NULL 成績，觀察 COUNT 的差異。",["WHERE 與 HAVING 的作用階段相同嗎？","不同，WHERE 先篩列，HAVING 後篩群組。"]);
Q("Q05","Joins and Relationships","JOIN 與關聯查詢",'SELECT s.name, c.title, e.grade\nFROM students AS s\nLEFT JOIN enrollments AS e ON s.student_id = e.student_id\nLEFT JOIN courses AS c ON e.course_id = c.course_id\nORDER BY s.student_id, c.course_id;',
 ["INNER JOIN 只保留符合關聯條件的組合，LEFT JOIN 另外保留左表未配對資料列。","一對多與多對多關聯會讓同一筆主表資料在結果出現多次，不能直接當成重複資料刪除。","RIGHT/FULL JOIN 的可用性依產品與版本而定；需要可攜性時先確認目標資料庫。"],
 ["錯誤：漏寫關聯條件 → 可能產生笛卡兒組合。修正：檢查每個 JOIN 的 ON。","錯誤：LEFT JOIN 後在 WHERE 要求右表欄位非 NULL → 可能失去未配對列。修正：依語意調整 ON 或 WHERE。"], ["sql","joins","databases"],"sql_join","列出所有學生與選課，包括沒有選課的學生；驗收未配對者仍有一列。",["學生有兩門課時，JOIN 結果通常只會有一列嗎？","不是，通常每筆匹配關係各形成一列。"]);
Q("Q06","Creating and Altering Tables","建立、修改與刪除資料表",'CREATE TABLE sessions (session_id INTEGER, topic VARCHAR(80), minutes INTEGER);\nINSERT INTO sessions VALUES (1,\'SQL review\',25);\nALTER TABLE sessions ADD COLUMN remark TEXT;\nSELECT session_id,topic,minutes,remark FROM sessions;',
 ["DDL 定義資料結構，DML 修改資料；DROP TABLE 與 DELETE 的影響範圍不同。","SQLite 以檔案或記憶體資料庫工作，沒有 MySQL 同樣的 CREATE DATABASE 工作流程。","SQLite 的型別親和性與 MySQL 嚴格型別行為不同；VARCHAR 長度限制不能跨方言直接假設。"],
 ["錯誤：DROP TABLE 當成清空資料但保留結構 → 資料表本身被移除。修正：先確認要刪列還是刪表。","錯誤：在 SQLite 以為 VARCHAR(5) 必然拒絕六字元字串。修正：了解方言並加入真正的約束。"], ["sql","ddl","schema"],"sql_create_table","設計學生、課程、選課三張表的欄位草稿，實際建表並查詢結構；下一單元補上關聯約束。",["SQLite 與 MySQL 的建庫命令可以原封不動互換嗎？","不能；需要依方言調整。"]);
Q("Q07","Constraints Keys and Relationships","主鍵、外鍵與約束",'CREATE TABLE study_logs (\n  log_id INTEGER PRIMARY KEY,\n  student_id INTEGER NOT NULL,\n  minutes INTEGER NOT NULL CHECK(minutes > 0),\n  label TEXT DEFAULT \'practice\',\n  FOREIGN KEY(student_id) REFERENCES students(student_id)\n);\nINSERT INTO study_logs(log_id,student_id,minutes) VALUES (1,1,25);\nSELECT log_id,student_id,minutes,label FROM study_logs;',
 ["PRIMARY KEY 識別資料列；外鍵維持表間參照，UNIQUE 與 NOT NULL 分別處理不同限制。","CHECK 可限制有效範圍；若 NULL 不合法，仍應配合 NOT NULL。","SQLite 連線要啟用 foreign_keys；組合主鍵可表達多對多關係中不可重複的配對。"],
 ["錯誤：定義外鍵後以為任何 SQLite 連線都自動檢查。修正：確認 PRAGMA foreign_keys = ON。","錯誤：只寫 CHECK(minutes > 0) 就期待拒絕 NULL。修正：另外宣告 NOT NULL。"], ["sql","constraints","schema"],"sql_constraints","為三表模型補上主鍵與外鍵，測試重複選課、不存在的學生與不合法學分都會被拒絕。",["UNIQUE 是否一定等同於 NOT NULL？","不等同；NULL 的允許與比較行為要依資料庫規則分別處理。"]);
Q("Q08","Schema to ERD Automation","由資料庫中繼資料自動產生 ERD",String.raw`import sqlite3
from pathlib import Path

connection = sqlite3.connect(":memory:")
connection.executescript(Path("fixtures.sql").read_text(encoding="utf-8"))
tables = [row[0] for row in connection.execute(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
)]
print("erDiagram")
for table in tables:
    quoted = '"' + table.replace('"', '""') + '"'
    foreign_keys = connection.execute(f"PRAGMA foreign_key_list({quoted})").fetchall()
    fk_columns = {row[3] for row in foreign_keys}
    for row in foreign_keys:
        print(f'    {row[2]} ||--o{{ {table} : "{row[3]}"')
    print(f"    {table} {{")
    for _, name, kind, required, default, primary in connection.execute(f"PRAGMA table_info({quoted})"):
        keys = []
        if primary:
            keys.append("PK")
        if name in fk_columns:
            keys.append("FK")
        print(f"        {kind.lower() or 'text'} {name} {','.join(keys)}".rstrip())
    print("    }")
connection.close()
`,
 ["先執行 DDL，再讀取資料庫真正建立的表、欄位與外鍵，避免手繪 ERD 與 schema 脫節。","此教學腳本針對已知的三表模型，將外鍵畫成父表一對子表零到多；不是適用所有 schema 的完整關聯推導器。","可選外鍵、唯一外鍵、組合外鍵與識別字轉義需要額外分析；MySQL 改查 information_schema。"],
 ["錯誤：只依欄位名稱猜外鍵 → 可能畫出資料庫根本沒定義的關係。修正：讀取外鍵 metadata。","錯誤：把每個外鍵都當成完全相同的基數 → UNIQUE 與 NULL 規則可能不同。修正：將產生器限定在已驗證模型，擴充時再解析額外約束。"], ["sql","erd","automation","schema"],"erd","自行設計三表、多對多主題，執行 DDL、擷取 metadata、產生 Mermaid，最後實際渲染並檢查圖形與資料庫一致。",["這個最小腳本能精準推導任何資料庫的所有基數嗎？","不能；它只對本文固定的必填外鍵、多對多連結表模型成立。"],{kind:"erd",codeLanguage:"python"});
