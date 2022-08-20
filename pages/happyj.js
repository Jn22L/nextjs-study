import Seo from "../components/Seo";
export default function Home({ happyjs }) {
  return (
    <div className="container">
      <Seo title="둔산점심로그" />
      {happyjs?.map((happyj) => (
        <div className="movie" key={happyj.LC_DATE}>
          <img src={happyj.LC_IMG_URL} />
          <h4>{happyj.LC_TITLE}</h4>
          <h5>{happyj.LC_DATE_FORMAT}</h5>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          width: 400px;
          height: 400px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
          margin: 0;
        }
        .movie h5 {
          font-size: 10px;
          text-align: center;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  //const happyjs = await (await fetch(`http://happyj.cafe24app.com/lunch-log/selectTest`)).json();
  let res = await fetch(
    `http://happyj.cafe24app.com/lunch-log/selectLunchLogHistory?` +
      new URLSearchParams({
        LC_TITLE: "%",
      })
  );
  let happyjs = await res.json();
  console.log(happyjs);
  return {
    props: {
      happyjs,
    },
  };
}
