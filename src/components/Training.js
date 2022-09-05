import './styles/training.css'
import bodybuilding from './images/bodybuilding.jpg'
import crossfit from './images/crossfit.jpg'
import powerlifting from './images/powerlifting.jpg'

function Training() {

  return (
    <section className="training">
        <h1 className="title section_title section_title-white">training</h1>
        <div className="container">
            <div className=" training_wrapper wrapper posRel">
              <img src={bodybuilding} className="wrapper_image posAbs" />
              <h2 className="training_title title posAbs">bodybuilding</h2>
              <div className="training_description posAbs">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed ad, amet esse minus error obcaecati magnam illo consequatur quidem explicabo omnis dignissimos ipsam voluptatum libero perferendis voluptates rem nisi.</p>
              </div>
            </div>
            <div className=" training_wrapper wrapper posRel">
              <img src={crossfit} className="wrapper_image posAbs" />
              <h2 className="training_title title posAbs">crossfit</h2>
              <div className="training_description posAbs">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed ad, amet esse minus error obcaecati magnam illo consequatur quidem explicabo omnis dignissimos ipsam voluptatum libero perferendis voluptates rem nisi.</p>
              </div>
            </div>
            <div className=" training_wrapper wrapper posRel">
              <img src={powerlifting} className="wrapper_image posAbs" />
              <h2 className="training_title title posAbs">powerlifting</h2>
              <div className="training_description posAbs">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed ad, amet esse minus error obcaecati magnam illo consequatur quidem explicabo omnis dignissimos ipsam voluptatum libero perferendis voluptates rem nisi.</p>
              </div>
            </div>
        </div>
    </section>
  );
}

export default  Training
