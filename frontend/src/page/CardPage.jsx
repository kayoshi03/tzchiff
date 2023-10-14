import {useEffect, useState} from "react";
import API from "../API/API";
import {useParams} from "react-router";
import deff from "../assets/coffee_highlight_tea_cup_icon_153758 11.png"

const CardPage = () => {
    const match = useParams()
    const id = match.id
    const [teacard, setTeacard] = useState([])
    const Fetch = async () => {
        const tea = await API.get(`/tea/${id}`)
        setTeacard(tea.data)

    }
    console.log(teacard)
    useEffect(()=> {
        Fetch()
    }, [])
    return (
        <div className="wrapper">
            <div className="teapage">
                <div className="image">
                    <img src={deff}/>
                </div>
                <div className="info">
                    <div>
                        <p className="title">{teacard.name}</p>
                        <div className="desc">
                            <p className="colon">Описание:</p>
                            <p>{teacard.description}</p>
                        </div>
                    </div>
                    <div className="price">
                        <div className="sell">
                            <p>{teacard.price}</p> <span>/</span> <p>100гр</p>
                        </div>
                        <button>В корзину</button>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default CardPage