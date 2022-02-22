import {BaseLayout} from "../BaseLayout/BaseLayout";
import {Card} from "../../components/Card/Card";
import {Slider} from "../../components/Swiper/Slider";

export const MainPage = () => {

    return (
        <BaseLayout>
           <Slider/>
           <Slider/>
        </BaseLayout>
    );
}