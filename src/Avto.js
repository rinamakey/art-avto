import { LazyLoadImage } from 'react-lazy-load-image-component'

function Avto ( { buyAvto } ) {


    return(
        <main  className="products">

            { buyAvto.map ( (element => { 

                const { id, name, searchTerm, price, image } = element;

                
                
                return(
                    <div key={id} className="product-cart">

                    <div className="container-image">
                        <div className="image">
                            <LazyLoadImage 
                                src= { image }
                                width={image.width}
                                heigth={image.heigth}
                            />
                                {/* <img src= { image }alt="img" /> */}
                        </div>
                    </div>
                    


                        <div >
                            <p className="nameLine"> {name} </p>
                            
                            <p className="priceLine"> от {price} руб.</p> 

                            <a href='#' className="btns"> <button> Записаться </button> </a>

                        </div>
                    </div>
                )
            }))}
        </main>
    )
}
export default Avto;