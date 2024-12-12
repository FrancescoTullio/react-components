import style from "./AppMain.module.css"
import MyButton from "./MyButton"

const AppMain = () =>{
    return (
<main>
    <div className="container">
        <section>
            <div className={style.row}>
                <div className={style.col}>
                    <div className={style.card}>
                        <div className="header-card">
                            <img src="./images/ciambellone.jpeg" alt="" />
                        </div>
                        <div className={style.cardBody}>
                            <h3>titolo del post</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cumque eos aliquam, unde odit rerum reiciendis eum, quibusdam possimus omnis enim. Consequuntur unde optio labore rerum aliquid quasi fugiat magni!</p>
                            <MyButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
    )
}

export default AppMain