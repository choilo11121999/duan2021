import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const Recommend = () => {
  const [listMovieRecommend, setListMovieRecommend] = useState(new Array());
  const [status, setStatus] = useState(false);
  useEffect(() => {
    axios.get('/api/select-list/product')
      .then((res) => {
        console.log(res);
        setListMovieRecommend(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [1]);
  const [checkedState, setCheckedState] = useState(
    new Array(20).fill(false)
  );
  const handleOnChangeCheckbox = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const [listId, setListId] = useState([]);
  console.log(listId);
  const getInfo = (index, category) => {
    let updateId = listId;
    if (index) {
      category.map((current) => updateId.push(current.id));
    } else {
      category.map((current) => {
        const index = updateId.indexOf(current.id);
        updateId.splice(index, 1);
      })
    }
    setListId(updateId);
  }
  
  const postData = () => {
    let id1 = 0; 
    let id2 = 0; 
    let id3 = 0; 
    let id4 = 0; 
    let id5 = 0; 
    let id6 = 0; 
    let id7 = 0; 
    let id8 = 0; 
    let id9 = 0;
    listId.forEach((id) => {
      console.log(id);
      switch (id) {
        case 1:
          id1++;
          break;
        case 2:
          id2++;
          break;
        case 3:
          id3++;
          break;
        case 4:
          id4++;
          break;
        case 5:
          id5++;
          break;
        case 6:
          id6++;
          break;
        case 7:
          id7++;
          break;
        case 8:
          id8++;
          break;
        case 9:
          id9++;
          break;
      }
    })
    console.log("id1", id9);

    const data = {
      "category": [
        {
          "id": 1,
          "count": id1
        },
        {
          "id": 2,
          "count": id2
        },
        {
          "id": 3,
          "count": id3
        },
        {
          "id": 4,
          "count": id4
        },
        {
          "id": 5,
          "count": id5
        },
        {
          "id": 6,
          "count": id6
        },
        {
          "id": 7,
          "count": id7
        },
        {
          "id": 8,
          "count": id8
        },
        {
          "id": 9,
          "count": id9
        }
      ]
    }
    console.log(data);
    axios.post('/api/save/user_category', data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      setStatus(true);
    }).catch((err) => console.log(err))
  }

  if (status) {
    return <Redirect to="/" />
  }

  return (
    <div className="container rounded border border-secondary my-4 p-4">
      <h3><strong style={{color: "red"}}>[Khảo sát]</strong> Chọn phim bạn thích</h3>
      <div className="body my-4 d-flex flex-wrap">
        {
          listMovieRecommend.map((movie, index) => {
            return (
              <div key={index} className="form-check form-check-inline my-2 mx-2" >
                <input
                    className="form-check-input d-none"
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={movie.film_name}
                    value={movie.film_name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChangeCheckbox(index)}
                    style={{cursor: "pointer"}}
                />
                <label className="form-check-label" htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}} onClick={() => getInfo(!checkedState[index], movie.category)}>
                  <img className="rounded" src={axios.defaults.baseURL+movie.poster} width={200} height={280} style={{border: `${checkedState[index] ? "2px solid red" : ""}`}} />
                </label>
              </div>
            );
          })
        }
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-lg btn-secondary w-25">Trang chủ</Link>
        <button className="btn btn-lg btn-danger ml-5 w-25" onClick={() => postData()}>Lưu lại</button>
      </div>
    </div>
  );
}

export default Recommend;