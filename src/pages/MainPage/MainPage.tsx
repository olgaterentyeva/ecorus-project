import {BaseLayout} from "../BaseLayout/BaseLayout";
import {Card} from "../../components/Card/Card";

export const MainPage = () => {

    return (
        <BaseLayout>
            <Card
                cardHeadline="Сделаем мир чище"
                cardText="Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"
                type = "button"
            />
            <div>
                <Card
                    cardHeadline="Пункты сбора"
                    cardText="Посмотри, где в твоем городе можно сдать вторсырь на переработку"
                />

                <Card
                    cardHeadline="Экомаркет"
                    cardText="Используй заработанные экокоины для покупки товаров из переработанных материалов "
                />
            </div>
        </BaseLayout>
    );
}