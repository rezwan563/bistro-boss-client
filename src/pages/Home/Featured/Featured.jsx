import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import moment from "moment";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading='Check It Out' heading='From Our Menu'></SectionTitle>
            <div className="flex justify-center items-center pb-20 pt-12 px-36">
                <div className="md:mr-16 ">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="p-4 bg-slate-700 bg-opacity-30">
                    <p>{moment().format('ll')}</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsam recusandae quasi ab autem eos ratione quod numquam ex, reprehenderit iusto! Ab sequi praesentium repellat excepturi optio, quos repellendus nemo ad accusantium autem animi est recusandae assumenda itaque nobis eos commodi ut fugit numquam corporis exercitationem, aliquam consequatur, rerum dolorum.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read more</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;