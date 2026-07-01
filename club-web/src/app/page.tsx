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



      {/* 固定导航栏 */}








      {/* Banner纯图片 */}

      <section

      className="
      h-[520px]
      bg-cover
      bg-center
      "

      style={{

        backgroundImage:
        "url('/banner.jpg')"

      }}

      >

      </section>








      {/* 数据展示 */}

      <section

      className="
      bg-red-900
      text-white
      py-20
      "

      >


        <h2
        className="
        text-center
        text-4xl
        font-bold
        mb-16
        "
        >

        数据 · 见证成长

        </h2>




        <div

        className="
        max-w-5xl
        mx-auto
        grid
        grid-cols-3
        gap-16
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









      {/* 最新活动 */}

      <section

      className="
      px-20
      py-20
      "

      >



        <div

        className="
        flex
        justify-between
        items-center
        mb-10
        "

        >


          <h2

          className="
          text-4xl
          font-bold
          "

          >

          最新活动

          </h2>



          <span

          className="
          text-gray-500
          "

          >

          查看更多 →

          </span>



        </div>







        <div

        className="
        space-y-5
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
          border-b
          pb-5
          "

          >


            <div

            className="
            flex
            items-center
            gap-4
            "

            >


              <span

              className="
              w-2
              h-2
              bg-blue-400
              rounded-full
              "

              >


              </span>



              <p

              className="
              text-lg
              "

              >

              {item.title}

              </p>


            </div>





            <span

            className="
            text-gray-400
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






// 数据组件

function Data({

number,

text

}:{

number:string

text:string

}){


return (

<div>


<h3

className="
text-5xl
font-bold
"

>

{number}

</h3>



<p

className="
mt-3
text-lg
"

>

{text}

</p>



</div>

)


}