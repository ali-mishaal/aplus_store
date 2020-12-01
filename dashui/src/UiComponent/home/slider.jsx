import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';

class Slider extends React.Component
{

  constructor()
  {
    super()
  }

  render()
  {
    
    return(
      <Fragment>
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="overlay"></div>
          <div class="carousel-inner">
            <div class="carousel-item carousel-one active">

             
            </div>
            <div class="carousel-item carousel-two">

              
            </div>
            <div class="carousel-item carousel-three">

              
            </div>
            <div class="carousel-item carousel-one ">

            </div>
            <div class="carousel-item carousel-two">
              
            </div>
            <div class="carousel-item carousel-three">
              
            </div>
          </div>
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                <img src="imgs/small-1.jpg" class="d-block w-100" alt="bannar1" />
            </li>
              
            <li data-target="#carouselExampleIndicators" data-slide-to="1">
                <img src="imgs/small-2.jpg" class="d-block w-100" alt="bannar1" />
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">
                <img src="imgs/small-3.jpg" class="d-block w-100" alt="bannar1" />
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3" class="">
                <img src="imgs/small-1.jpg" class="d-block w-100" alt="bannar1" />
            </li>
              
            <li data-target="#carouselExampleIndicators" data-slide-to="4">
                <img src="imgs/small-2.jpg" class="d-block w-100" alt="bannar1" />
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5">
                <img src="imgs/small-3.jpg" class="d-block w-100" alt="bannar1" />
            </li>
          </ol>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </Fragment>
    );
  }
 
}
export default Slider;