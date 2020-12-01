import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';

class ChooseEngagement extends React.Component
{

  constructor()
  {
    super()
  }

  render()
  {
    
    return(
      <Fragment>
        <section className="chse-soliter pd-norm-sec text-center">
            <div className="container">
                <div className="overlay-chse"></div>
                <div className="index-section">
                    <h2 className="bold">اختر سلوتير الخطبة</h2>
                    <p className="mt-4">صمم خاتم سلوتير الخطوبة بالطريقة التي تناسب ذوقكم<br />يوجد خيارات واسعة تلبي متطلباتكم</p>
                    <div className="">
                        <a href="#"><i className="fas fa-arrow-right"></i> ابدء باختيار الموديل</a>
                        <a href="#"><i className="fas fa-arrow-right"></i> ابدء باختيار نوع التركيب</a>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    );
  }
 
}
export default ChooseEngagement;