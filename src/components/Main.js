import CardJurusan from "./CardJurusan";
import CardKegiatan from "./CardKegiatan";
import SlideHero from "./Hero"
import Jurusan1 from './../assets/Slide3.jpg'
import Jurusan2 from './../assets/Jurusan Dkv.jpeg'
import Jurusan3 from './../assets/Jurusan Titl.jpeg'
import Kegiatan1 from './../assets/Mou.jpeg'
import Kegiatan2 from './../assets/Slide2.jpeg'
import Kegiatan3 from './../assets/SIM.jpeg'


const Main = () => {
    return(
        <div>
            <SlideHero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={Jurusan1} jurusan="Teknik Audio Video" deskripsi="Mengoperasikan, merawat, menginstalasi, menerapkan, dan mereparasi Sistem Elektronika" />
                    </div>
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={Jurusan2} jurusan="Desain Komunikasi Visual" deskripsi="Mengoperasikan software peripheral digital ilustration, digital imaging dan web design" />
                    </div>
                    <div className="col-lg-4 col-12">
                        <CardJurusan image={Jurusan3} jurusan="Teknik Instalasi Tenaga Listrik" deskripsi="Menganalisis rangkaian istrik, Memahami dasar-dasar Elektronika" />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 my-3">
                        <CardKegiatan image={Kegiatan1} deskripsi="Kerjasama dengan Industri"/>
                    </div>
                    <div className="col-12 my-3">
                        <CardKegiatan image={Kegiatan2} deskripsi="Kerjasama dengan Industri bertajuk Link and Super Match"/>
                    </div>
                    <div className="col-12 my-3">
                        <CardKegiatan image={Kegiatan3} deskripsi="Kegiatan SIM (Siswa Iso Motret)"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;