
function Buttons( {productSelection} ){
    return(
        <div className="btnSelected">
            
            <button onClick={()=>productSelection('ТО')}className="item"> ТО </button>

            <button onClick={()=>productSelection('Ремонт двигателей')} className="item"> Ремонт двигателей </button>

            <button onClick={()=>productSelection('Трансмиссия')}className="item"> Трансмиссия</button>

            <button onClick={()=>productSelection('Подвеска')}className="item"> Подвеска </button>

            <button onClick={()=>productSelection('Тормоза')}className="item"> Тормоза </button>

            <button onClick={()=>productSelection('Электрика')}className="item"> Электрика </button>

            <button onClick={()=>productSelection('Кузов')}className="item"> Кузов </button>

            <button onClick={()=>productSelection('Шиномонтаж')}className="item"> Шиномонтаж </button>

            <button onClick={()=>productSelection('Замена стекол и зеркал')}className="item"> Замена стекол и зеркал </button>
        </div>
    )
}
export default Buttons;