import './List.css'
const List = ({listData}) => {
      console.log(listData);
    return (
      <div className="container mx-auto row flex-row flex-nowrap">
        <div className="list row">
          {
            listData.map((item) => {
              return(
                <div className="card col-2 border-0 py-2" >
                 <img className="card-img-top" 
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`}
                    role="img"  ></img>
                  <div className="card-body">
                  <a className="cardText" href={`https://www.themoviedb.org/tv/${item.id}`}
                  title="'+results.name+'">{item.name}</a>
                  <div className="dateRight">
                  <small className="text-muted dateRight">{item.first_air_date}</small>
                  </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      );
    };

export default List 