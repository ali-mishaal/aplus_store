import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';

class Footer extends React.Component
{

  constructor()
  {
    super()
  }

  render()
  {
    
    return(
      <Fragment>
         <footer className="footer">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-3">
                        <div className="company">
                            <img src="imgs/logo.png" alt="logo" />
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i> 184 Main Rd E, St Albans VIC 3021, Australia</li>
                                <li><i className="fas fa-envelope"></i> contact@company.com</li>
                                <li><i className="fas fa-phone"></i> +001 2233 456</li>
                                <li><div className="row">
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    
                                </div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="info">
                            <h3>خدمات</h3>
                            <ul>
                                <a href="#"><li>ثمن مجوهراتك</li></a>
                                <a href="#"><li>صمم مجوهراتك</li></a>
                                <a href="#"><li>صلح مجوهراتك</li></a>
                                <a href="#"><li>اشحن مجوهراتك</li></a>
                                <a href="#"><li>فحص واصدار شهادات</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="info">
                            <h3>فرص عمل الموظفين</h3>
                            <ul>
                                <a href="#"><li>اعمل في تصميم المجوهرات</li></a>
                                <a href="#"><li>اعمل في بيع المجوهرات</li></a>
                                <a href="#"><li>اعمل في تركيب المجوهرات</li></a>
                                <a href="#"><li>اعمل في تصنيع المجوهرات</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="info">
                            <h3>معلومات مفيدة</h3>
                            <ul>
                                <a href="#"><li>معلومات الألماس</li></a>
                                <a href="#"><li>معلومات الؤلؤ</li></a>
                                <a href="#"><li>احجار كريمة</li></a>
                                <a href="#"><li>كيف تنتقي مجوهراتك</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="info">
                            <h3>اخر الاخبار</h3>
                            <ul>
                                <a href="#"><li>نشاطاتنا</li></a>
                                <a href="#"><li>معارض</li></a>
                                <a href="#"><li>اخبار محلية</li></a>
                                <a href="#"><li>اخبار عالمية</li></a>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="copyright">
            
                    <div className="row">
                        <div className="txt-copy">
                            DESIGN BY HABBAL'S - © 2019. ALL RIGHTS RESERVED.
                        </div>
                
                        <ul className="nav nav-pills">
                          
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">السياسات</a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">اخلاء المسؤولية وسياسة الخصوصية</a>
                              <a className="dropdown-item" href="#">الضمان وخدمة ما بعد الشراء</a>
                              <a className="dropdown-item" href="#">سياسة الشراء</a>
                              <a className="dropdown-item" href="#">سياسة التبديل</a>
                              <a className="dropdown-item" href="#">سياسة البيع</a>
                            </div>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">الارشيف</a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">اسعار الالماس</a>
                              <a className="dropdown-item" href="#">اسعار الذهب</a>
                              <a className="dropdown-item" href="#">ارشيف الصور</a>
                              
                            </div>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">معلومات عنا</a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">من نحن</a>
                              <a className="dropdown-item" href="#">مهمتنا</a>
                              <a className="dropdown-item" href="#">انتماءاتنا</a>
                              
                              <a className="dropdown-item" href="#">دكان</a>
                              <a className="dropdown-item" href="#">سجل الزوار</a>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">تواصل معنا</a>
                          </li>
                        </ul>
                    </div>
            
                </div>
             </div>
        </footer>

         
        </Fragment>
    );
  }
 
}
export default Footer;