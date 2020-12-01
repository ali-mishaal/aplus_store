import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';

class BeforeFooter extends React.Component
{

  constructor()
  {
    super()
  }

  render()
  {
    
    return(
      <Fragment>
          <section className="your-design text-center">
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="text-section">
                        <h2 className="bold s-color">اذا كان لديك قطعة قديمة ونادرة</h2>
                    <p className="mt-4">ثمن مجوهراتك الماسية وتعرف علي قيمتها الحالية في السوقوذلك بحسب الواقع <br /> والاسعار المتداولة ووفق ادق التفاصيل والملامح لهذه القطعة <br /> وزن , لون , نقاء الالماسكل علي حدا بالتفصيل العددي</p>
                    <div className="">
                        <a href="#"><i className="fas fa-arrow-right"></i> ابدء باختيار الموديل</a>
                        <a href="#"><i className="fas fa-arrow-right"></i> ابدء باختيار نوع التركيب</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <img src="imgs/mtg2.jpg" alt="banner1" />
                </div>
            </div>
        </section>
        <section className="your-design text-center">
            <div className="row">
                
                <div className="col-lg-6 col-xs-12">
                    <img src="imgs/mt3.jpg" alt="banner1" />
                </div>
                <div className="col-lg-6 col-xs-12">
                    <div className="text-section">
                        <h2 className="bold s-color">صمم مجوهراتك</h2>
                        <p className="mt-4">ببساطة ما عليكم سوي ارسال ملامح القطعة التي ترغبون باقتنائها <br /> لنطورها لكم بثلاث تصميمات لعرضها عليكم لاحقا<br />نحن نتطلع لكي نكون ممنيرضون ذوقكم</p>
                        <div className="">
                            <a href="#"><i className="fas fa-arrow-right"></i> طلب تصميم</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
      </Fragment>
    );
  }
 
}
export default BeforeFooter;