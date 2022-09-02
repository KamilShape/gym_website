import much_space from './images/much_space.jpg'
import modern_equip from './images/modern_equip.jpg'
import best_trainers from './images/best_trainers.jpg'

function OurGym() {

  return (
    <section className="ourgym">
      <h1 className="title section_title">our gym</h1>
      <div className="container">
        <div className="container_section">
            <div className="wrapper posRel">
              <img src={modern_equip} className="wrapper_image posAbs" />
            </div>
            <p className="description">modern equipment</p>
        </div>
        <div className="container_section">
            <div className="wrapper posRel">
              <img src={much_space} className="wrapper_image posAbs" />
            </div>
            <p className="description">much space</p>
        </div>
        <div className="container_section">
          <div className="wrapper posRel">
              <img src={best_trainers} className="wrapper_image posAbs" />
          </div>
          <p className="description">best trainers</p>
        </div>
      </div>

    </section>
  );
}

export default  OurGym
