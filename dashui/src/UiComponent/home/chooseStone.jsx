import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';

class ChooseStone extends React.Component
{

  constructor()
  {
    super()
  }

  render()
  {
    
    return(
      <Fragment>
          <section className="chse-type pd-norm-sec text-center cir-shop pt-5">
            <div className="container">
                <h2 className="bold s-color">اختر الحجر الذي يناسبكم</h2>
                <form>
                    <div className="owl-carousel annnn carousel-test owl-theme owl-loaded owl-drag aos-init aos-animate mt-5" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option1" />
                                    <label className="form-check-label label1" for="option1"></label>
                                    <p>Round</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option2" />
                                    <label className="form-check-label label2" for="option2"></label>
                                    <p>Cushion</p>
                                </div>
                                
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option3" />
                                    <label className="form-check-label label3" for="option3"></label>
                                    <p>Oval</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option4" />
                                    <label className="form-check-label label4" for="option4"></label>
                                    <p>Pear</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option5" />
                                    <label className="form-check-label label5" for="option5"></label>
                                    <p>Princess</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option6" />
                                    <label className="form-check-label label6" for="option6"></label>
                                    <p>Radiant</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option7" />
                                    <label className="form-check-label label7" for="option7"></label>
                                    <p>Square Radiant</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option8" />
                                    <label className="form-check-label label8" for="option8"></label>
                                    <p>Emerald</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option9" />
                                    <label className="form-check-label label9" for="option9"></label>
                                    <p>Asscher</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option10" />
                                    <label className="form-check-label label10" for="option10"></label>
                                    <p>Heart</p>
                                </div>
                              </div>
                          </div>
                          <div className="owl-item active">
                              <div className="item">
                                <div className="form-group">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Radio1" value="option11" />
                                    <label className="form-check-label label11" for="option11"></label>
                                    <p>Marquise</p>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
                    <div className="row mt-3">
                        <div className="col-lg-6">
                             <div className="color mt-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p>Color :</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col">
                                                <label for="color1">J</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color1" />
                                            </div>
                                            <div className="col">
                                                <label for="color2">I</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color2" />
                                            </div>
                                            <div className="col">
                                                <label for="color3">H</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color3" />
                                            </div>
                                            <div className="col">
                                                <label for="color4">G</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color4" />
                                            </div>
                                            <div className="col">
                                                <label for="color5">F</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color5" />
                                            </div>
                                            <div className="col">
                                                <label for="color6">E</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color6" />
                                            </div>
                                            <div className="col">
                                                <label for="color7">D</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color7" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">  
                            <div className="polish mt-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p>Polish :</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col">
                                                <label for="polish1">Good</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish1" />
                                            </div>
                                            <div className="col">
                                                <label for="polish2">Very Good</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish2" />
                                            </div>
                                            <div className="col">
                                                <label for="polish3">Excellent</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-6">
                             <div className="clarity mt-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p>Clarity :</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col">
                                                <label for="color1">SI1</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color1" />
                                            </div>
                                            <div className="col">
                                                <label for="color2">SI2</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color2" />
                                            </div>
                                            <div className="col">
                                                <label for="color3">VS2</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color3" />
                                            </div>
                                            <div className="col">
                                                <label for="color4">VS1</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color4" />
                                            </div>
                                            <div className="col">
                                                <label for="color5">VVS2</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color5" />
                                            </div>
                                            <div className="col">
                                                <label for="color6">VVS1</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color6" />
                                            </div>
                                            <div className="col">
                                                <label for="color7">IF</label>
                                                <input type="radio" name="colorRadio" className="form-control" id="color7" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">  
                            <div className="Symmetry mt-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p>Symmetry:</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col">
                                                <label for="polish1">Good</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish1" />
                                            </div>
                                            <div className="col">
                                                <label for="polish2">Very Good</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish2" />
                                            </div>
                                            <div className="col">
                                                <label for="polish3">Excellent</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-6">
                             <div className="Cut mt-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p>Cut :</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col">
                                                <label for="polish1">Good</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish1" />
                                            </div>
                                            <div className="col">
                                                <label for="polish2">Very Good</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish2" />
                                            </div>
                                            <div className="col">
                                                <label for="polish3">Excellent</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish3" />
                                            </div>
                                            <div className="col">
                                                <label for="polish3">Ideal</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">  
                            <div className="polish mt-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p>Fluorescence:</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col">
                                                <label for="polish1">Medium</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish1" />
                                            </div>
                                            <div className="col">
                                                <label for="polish2">Faint</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish2" />
                                            </div>
                                            <div className="col">
                                                <label for="polish3">None</label>
                                                <input type="radio" name="sizeRadio" className="form-control" id="polish3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="price mt-5">
                                <h4>Price</h4>
                                <nav className="nav mt-2">
                                    <fieldset>
                                         <legend>Min Price</legend>
                                         <input type="number" className="form-control counter-pro" placeholder="0.00" />
                                    </fieldset>
                                    <fieldset>
                                         <legend>Max Price</legend>
                                         <input type="number" className="form-control counter-pro" placeholder="0.00" />
                                    </fieldset>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="carat mt-5">
                                <h4>Carat</h4>
                                <nav className="nav mt-2">
                                    <fieldset>
                                         <legend>Min Carat</legend>
                                         <input type="number" className="form-control counter-pro" placeholder="0.00" />
                                    </fieldset>
                                    <fieldset>
                                         <legend>Max Carat</legend>
                                         <input type="number" className="form-control counter-pro" placeholder="0.00" />
                                    </fieldset>
                                </nav>
                            </div>
                        </div>
                    </div>
                </form>
                
   
            </div>
         </section>
      </Fragment>
    );
  }
 
}
export default ChooseStone;