export default function Home() {

  const news = [
    {
      title:"春季招新活动圆满结束",
      date:"2026-06-25"
    },
    {
      title:"人工智能技术交流分享会",
      date:"2026-06-18"
    },
    {
      title:"社团篮球友谊赛成功举办",
      date:"2026-06-10"
    },
    {
      title:"校园文化节活动顺利开展",
      date:"2026-06-05"
    },
    {
      title:"新成员培训交流会议",
      date:"2026-06-01"
    },
    {
      title:"社团年度总结会议召开",
      date:"2026-05-29"
    }
  ]


  return (

    <main className="pt-20">




      {/* ================= Banner（电脑端） ================= */}

      <section className="hidden md:block">

        <div

          className="
          w-full
          h-[520px]
          overflow-hidden
          "

        >

          <img

            src="/banner.jpg"

            alt="Banner"

            className="
            w-full
            h-full
            object-cover
            "

          />

        </div>

      </section>




      {/* ================= Banner（手机端） ================= */}

      <section className="block md:hidden">

        <img

          src="/banner.jpg"

          alt="Banner"

          className="
          w-full
          h-auto
          "

        />

      </section>







      {/* ================= 数据展示 ================= */}

      <section

        className="
        bg-red-900
        text-white
        py-14
        md:py-20
        "

      >

        <h2

          className="
          text-3xl
          md:text-4xl
          font-bold
          text-center
          mb-12
          md:mb-16
          "

        >

          数据 · 见证成长

        </h2>





        <div

          className="
          max-w-6xl
          mx-auto
          px-6
          grid
          grid-cols-2
          md:grid-cols-3
          gap-10
          md:gap-16
          text-center
          "

        >

          <Data

            number="1200+"

            text="社团成员"

          />



          <Data

            number="80+"

            text="举办活动"

          />



          <Data

            number="15"

            text="核心部门"

          />



          <Data

            number="300+"

            text="累计参与人数"

          />



          <Data

            number="20"

            text="优秀项目"

          />



          <Data

            number="5"

            text="合作单位"

          />

        </div>

      </section>




      {/* ================= 最新活动 ================= */}

      <section

        className="
        px-5
        md:px-20
        py-14
        md:py-20
        "

      >

        <div

          className="
          flex
          justify-between
          items-center
          mb-8
          md:mb-10
          "

        >

          <h2

            className="
            text-3xl
            md:text-4xl
            font-bold
            "

          >

            最新活动

          </h2>



          <span

            className="
            text-sm
            md:text-base
            text-gray-500
            cursor-pointer
            hover:text-red-900
            duration-300
            "

          >

            查看更多 →

          </span>

        </div>




        <div

          className="
          space-y-4
          md:space-y-5
          "

        >
        {

          news.map((item)=>(

            <div

              key={item.title}

              className="
              flex
              justify-between
              items-center
              gap-4
              border-b
              pb-5
              hover:bg-gray-50
              duration-300
              px-2
              rounded-lg
              "

            >

              <div

                className="
                flex
                items-center
                gap-3
                flex-1
                min-w-0
                "

              >

                <span

                  className="
                  w-2
                  h-2
                  bg-blue-500
                  rounded-full
                  flex-shrink-0
                  "

                />



                <p

                  className="
                  text-base
                  md:text-lg
                  truncate
                  "

                >

                  {item.title}

                </p>

              </div>



              <span

                className="
                text-xs
                md:text-base
                text-gray-400
                whitespace-nowrap
                "

              >

                {item.date}

              </span>

            </div>

          ))

        }

        </div>

      </section>

    </main>

  )

}






// ================= 数据组件 =================

function Data({

  number,

  text

}:{

  number:string

  text:string

}){

  return (

    <div

      className="
      py-3
      "

    >

      <h3

        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        "

      >

        {number}

      </h3>



      <p

        className="
        mt-3
        text-sm
        sm:text-base
        md:text-lg
        text-gray-200
        "

      >

        {text}

      </p>

    </div>

  )

}