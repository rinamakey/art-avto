import React from "react";
import {Carousel } from "react-bootstrap";
import audi from'./../main/audi.jpeg';
import cool from'./../main/cool.jpeg';
import aud from'./../main/aud.bl.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';


function Slider() {
    return(
    <Carousel>
        <Carousel.Item >
            <img
                className="d-block w-100"
                src={audi}
                alt="f"
            />
            <Carousel.Caption className="carusel">
                <h2>ART&&MOTORS</h2>
                <h3>Автосервис премиум класса</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
            <img
                className="d-block w-100"
                src={cool}
                alt="f"
            />
            <Carousel.Caption>
                <h2>ART&&MOTORS</h2>
                
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
            <img
                className="d-block w-100"
                src={aud}
                alt="f"
            />
            <Carousel.Caption>
                <h2>ART&&MOTORS</h2>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    )
}
export default Slider;