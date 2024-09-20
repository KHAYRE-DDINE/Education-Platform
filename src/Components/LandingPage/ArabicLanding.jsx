import React from "react";
import logo from "../../images/logo2.svg";
import Definition from "./Definition/Definition";
import frepeek from "../../images/freepik--Character--inject-119.svg";
import frepeek2 from "../../images/freepik--Character--inject-2.svg";
import brain from "../../images/brain.png";
import math from "../../images/math.svg";
import math2 from "../../images/math2.svg";
import math3 from "../../images/math3.svg";
import math4 from "../../images/math4.svg";
import math5 from "../../images/math5.svg";
import setting from "../../images/setting.svg";
import xy from "../../images/xy.svg";
import x2 from "../../images/x2.svg";
import atomP from "../../images/atom.svg";
import plan from "../../images/plan.svg";
import chimie from "../../images/chimie.svg";
import functionF from "../../images/function.svg";
import earth from "../../images/freepik--Earth--inject-2.svg";
import teach from "../../images/Frame 55.svg";
import teach1 from "../../images/Frame.svg";
import { useNavigate } from "react-router-dom";

function ArabicLanding({ active, setActive }) {
  const navigate = useNavigate();

  return (
    <div className="landing-page overflow-hidden">
      <div className="header flex-row-reverse">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="text-colorGray-700 capitalize">الرحلة</span>
        </div>
        <div
          onClick={() => navigate("login")}
          className="btn cursor-pointer bg-colorBlue-600"
        >
          <button>انضم إلى النسخة التجريبية</button>
        </div>
      </div>
      <div className="introduction relative">
        <div className="circle absolute mt-[45px] sm:w-[119.875rem] md:w-[119.875rem] lg:w-[119.875rem] xl:w-[119.875rem] h-[119.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[135px] sm:w-[107.875rem] md:w-[107.875rem] lg:w-[107.875rem] xl:w-[107.875rem] h-[107.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[225px] sm:w-[95.875rem] md:w-[95.875rem] lg:w-[95.875rem] xl:w-[95.875rem] h-[95.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[315px] sm:w-[83.9375rem] md:w-[83.9375rem] lg:w-[83.9375rem] xl:w-[83.9375rem] h-[83.9375rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[405px] sm:w-[71.875rem] md:w-[71.875rem] lg:w-[71.875rem] xl:w-[71.875rem] h-[71.875rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[495px] sm:w-[59.9375rem] md:w-[59.9375rem] lg:w-[59.9375rem] xl:w-[59.9375rem] h-[59.9375rem] !border-colorBlue-300"></div>
        <div className="circle absolute mt-[585px] sm:w-[48rem] md:w-[48rem] lg:w-[48rem] xl:w-[48rem] h-[48rem] !border-colorBlue-300"></div>
        <button className="users z-10 relative bg-colorGray-100 text-colorGray-700">
          مفتوح لمستخدمي النسخة التجريبية
        </button>
        <Definition
          title="اختيار الدراسة هو أفضل قرار يمكنك اتخاذه على الإطلاق. نحن نساعدك على النجاح"
          paragraph="تمكين رحلة التعلم الخاصة بك. اكتسب المعرفة، واحصل على الدعم، وأطلق العنان لإمكاناتك الكاملة"
          size="1.125rem"
          width="36.875rem"
        />
        <div className="btns z-10 relative">
          <form className="form !border-colorGray-200">
            <input
              className="text-colorGray-500"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="join bg-colorBlue-600">
              انضم إلى النسخة التجريبية
            </button>
          </form>
          <button className="sales bg-colorGray-200 text-colorGray-700">
            مبيعات الاتصال
          </button>
        </div>
        <div className="image">
          <div className="border">
            <div></div>
          </div>
        </div>
      </div>
      <div className="trusted">
        <h3 className="text-colorGray-500">موثوق به من قبل الناس في</h3>
        <div className="images flex justify-between items-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="superpower">
        <Definition
          title="التعليم بقوة خارقة"
          paragraph="عزز رحلتك التعليمية. اكتسب المعرفة، واحصل على الدعم، وأطلق العنان لإمكاناتك الكاملة."
          size="1rem"
          width="23.75rem"
        />
        <div className="first flex-row-reverse  bg-colorGray-100">
          <div className="info !items-end">
            <div className="head">
              <h3 className="text-colorGray-700">اكتشف، تعلم، ازدهر</h3>
            </div>
            <div className="para">
              <p className="text-colorGray-500">
                منصة واحدة للجميع الطلاب وأولياء الأمور والمعلمين وحتى المدارس.
                كل المحتوى والأدوات والمساعدة التي تحتاجها للحصول على أفضل تجربة
                تعليمية على الإطلاق.
              </p>
            </div>

            <div className="buttons before:right-0 before:!left-auto">
              <div className="btn !items-end">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={`text-colorGray-500 !border-r-[1px]${
                    active === "student" ? "active before:right-[-22px]" : ""
                  }`}
                >
                  الطالب
                </button>
              </div>
              <div className="btn !items-end">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={`text-colorGray-500 ${
                    active === "parent" ? "active " : ""
                  }`}
                >
                  ولي الأمر
                </button>
              </div>
              <div className="btn !items-end">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={`text-colorGray-500 ${
                    active === "teacher" ? "active " : ""
                  }`}
                >
                  المعلم
                </button>
              </div>
              <div className="btn !items-end">
                <button
                  onClick={(e) => setActive(e.target.textContent)}
                  className={`text-colorGray-500 ${
                    active === "schools" ? "active " : ""
                  }`}
                >
                  المدارس
                </button>
              </div>
            </div>
          </div>

          <div className="image">
            <div className="border">
              <div></div>
            </div>
          </div>
        </div>
        <div className="second flex gap-6">
          <div className="square bg-colorGray-100">
            <div className="images">
              <div className="icons">
                <img
                  className="absolute left-[9%]  w-[80px]"
                  src={math}
                  alt="board"
                />
                <img
                  className="absolute  right-[2.75rem] top-[0] w-[80px]"
                  src={brain}
                  alt="brain"
                />
                <img
                  className="absolute  left-[9%] bottom-[13%] w-[80px]"
                  src={math2}
                  alt="atom"
                />
                <img
                  className="absolute  left-7 top-[7.75rem] w-[80px]"
                  src={math3}
                  alt="einstein"
                />
                <img
                  className=" absolute  top-[35%] right-5 b-[40px] w-[80px]"
                  src={math4}
                  alt="school"
                />{" "}
                <img
                  className=" absolute  bottom-[60%] left-[45%] b-[40px] w-[80px]"
                  src={chimie}
                  alt="chimie"
                />
                <img
                  className=" absolute top-0  object-cover w-[80px]"
                  src={math5}
                  alt="school"
                />
                <img
                  className="absolute bottom-0 z-50"
                  src={frepeek}
                  alt="frepeek"
                />
              </div>
            </div>
            <div className="info mt-8">
              <h3 className="text-colorGray-700">التعليم لجميع الأعمار</h3>
              <p className="text-colorGray-500">
                سهلت على أي شخص الدراسة من المنزل. احصل على كل المحتوى الذي يتم
                تسليمه مباشرة إلى حسابك واستمتع بالفصول الدراسية عبر الإنترنت.
              </p>
            </div>
          </div>
          <div className="square bg-colorGray-100">
            <div className="images">
              <div className="icons">
                <img
                  className="absolute left-[9%]  bottom-[24px] w-[80px]"
                  src={atomP}
                  alt="atom"
                />
                <img
                  className="absolute  right-[2.75rem] top-[0] w-[80px]"
                  src={plan}
                  alt="plan"
                />
                <img
                  className=" absolute  bottom-[25%] right-[1.25rem] b-[40px] w-[80px]"
                  src={setting}
                  alt="setting"
                />
                <img
                  className=" absolute  bottom-[60%] left-[45%] b-[40px] w-[80px]"
                  src={chimie}
                  alt="chimie"
                />
                <img
                  className=" absolute  bottom-[30%] left-[3.25rem] b-[40px] w-[80px]"
                  src={functionF}
                  alt="functionF"
                />
                <img
                  className="mr-[130px] mb-[40px] z-50 w-[80px]"
                  src={earth}
                  alt="earth"
                />
                <img
                  className="absolute bottom-0 z-50 "
                  src={frepeek2}
                  alt="frepeek2"
                />
                {/* <img
                  className="absolute bottom-[130px] mr-[30px] z-50 w-[80px]"
                  src={square}
                  alt="square"
                /> */}
                <img
                  className="absolute bottom-[250px] left-[13%] z-50 w-[80px]"
                  src={x2}
                  alt="x2"
                />
                <img
                  className="absolute top-[146px] right-[60px] z-50 w-[80px]"
                  src={xy}
                  alt="xy"
                />
              </div>
            </div>
            <div className="info mt-8">
              <h3 className="text-colorGray-700">جميع المواضيع مدعومة</h3>
              <p className="text-colorGray-500">
                نخبة من المعلمين لكل مادة. احصل على الشخص المناسب ليعلمك المادة
                التي تحتاجها من خلال دروس جماعية أو فردية
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <Definition
          title="دلائل الميزات"
          paragraph="منصة قوية ذات قوى خارقة مصممة لتزدهر في دراستك وتؤمن مستقبلك"
          size="1rem"
          width="23.75rem"
        />
        <div className="boxes">
          <div className="squares ">
            <div className="box bg-colorGray-100">
              <div className="image">
                <div className="inside-image">
                  {" "}
                  <img src={teach} alt="image" />
                </div>
              </div>
              <div className="info">
                <h3 className="text-colorGray-700">سهل</h3>
                <p className="text-colorGray-500">
                  مهما كان عمرك أو الصف الدراسي الذي أنت فيه، نحن نصنع لك
                  الدراسة سهلة .
                </p>
              </div>
            </div>
            <div className="box bg-colorGray-100">
              <div className="image">
                <div className="inside-image">
                  {" "}
                  <img src={teach1} alt="image" />
                </div>
              </div>
              <div className="info">
                <h3 className="text-colorGray-700">آمن</h3>
                <p className="text-colorGray-500">
                  بياناتك، تحكمك. <br />
                  الأمن في كل مرحلة.
                </p>
              </div>
            </div>
            <div className="box bg-colorGray-100">
              <div className="image">
                <div className="inside-image">
                  {" "}
                  <img src={teach1} alt="image" />
                </div>
              </div>
              <div className="info">
                <h3 className="text-colorGray-700">قوية</h3>
                <p className="text-colorGray-500">
                  استمتع بتجربة تعليمية ممتعة مع ميزات متقدمة.
                </p>
              </div>
            </div>
            <div className="box bg-colorGray-100">
              <div className="image">
                <div className="inside-image">
                  {" "}
                  <img src={teach1} alt="image" />
                </div>
              </div>
              <div className="info">
                <h3 className="text-colorGray-700">سريع</h3>
                <p className="text-colorGray-500">
                  سرعة لا هوادة فيها. الأداء الأمثل، في كل وقت.
                </p>
              </div>
            </div>
            <div className="box bg-colorGray-100">
              <div className="image">
                <div className="inside-image">
                  <img src={teach1} alt="image" />
                </div>
              </div>
              <div className="info">
                <h3 className="text-colorGray-700">المرح</h3>
                <p className="text-colorGray-500">
                  تأخذ العائلة المرح على محمل الجد. تفاعلات مبهجة مع كل نقرة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <button className="users bg-colorGray-100 text-colorGray-700">
          مفتوح لمستخدمي النسخة التجريبية
        </button>
        <Definition
          title="هل أنت مستعد لبدء رحلتك"
          paragraph="قم بالتسجيل للوصول المبكر، واحصل على تنبيه عندما نطلق منصتنا ونصبح أحد عملائنا الأوائل."
        />
        <div className="btns">
          <form className="form !border-colorGray-200">
            <input
              className="text-colorGray-500"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="join bg-colorBlue-600">
              انضم إلى النسخة التجريبية
            </button>
          </form>
          <button className="sales bg-colorGray-200 text-colorGray-700">
            اتصل بالمبيعات
          </button>
        </div>
      </div>
      <footer className="footer flex bg-colorGray-100">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="capitalize">الرحلة</span>
        </div>
        <ul className="list flex">
          <li>
            <span className="text-gray-600 cursor-pointer">التعليمات</span>
          </li>
          <li>
            <span className="text-gray-600 cursor-pointer">خصوصية</span>
          </li>
          <li>
            <span className="text-gray-600 cursor-pointer">شروط</span>
          </li>
        </ul>
        <div className="btn bg-colorBlue-600">
          <button>انضم إلى النسخة التجريبية</button>
        </div>
      </footer>
    </div>
  );
}

export default ArabicLanding;
