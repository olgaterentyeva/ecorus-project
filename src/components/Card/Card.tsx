import styles from "./Card.module.scss";
import {Button} from "../ui/Button/Button";

export const Card = (props:any) => {

    const onServiceConditionClick = () => {
        console.log("pressed the service condition button");
    }

  return(
      <>
          <div className={styles.section}>
              <div className={styles.section__info}>
                  <h1>{props.cardHeadline}</h1>
                  <p>{props.cardText}</p>
                  <Button type={props.type} onClick={onServiceConditionClick} buttonText="Условия сервиса"/>
              </div>
              <img src={props.img} alt="serviceCondition"/>
          </div>
      </>
  )
}