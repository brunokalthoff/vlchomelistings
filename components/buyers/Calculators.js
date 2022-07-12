import styles from '../../styles/buyers/Calculators.module.css'

function Calculators() {
    return (
        <div className={styles.container}>
            <h2>Use our calculators. <br /> <span>Plan your mortgage, know your costs.</span>
            </h2>
         
            <h4>Land transfer tax calculator</h4>
                <iframe className={styles.calculator} src="https://www.ratehub.ca/widgets/payment-calc.php?ltt=only&lang=en&ac=954289" style={{height: '350px'}} frameBorder="0"></iframe>
 
            <h4>Mortgage payment calculator</h4>
                <iframe className={styles.calculator} src="https://www.ratehub.ca/widgets/payment-calc.php?lang=en&ac=954289" style={{height: '670px'}}  frameBorder="0"></iframe>
          
            <h4>CMHC insurance calculator</h4>
                <iframe className={styles.calculator} src="https://www.ratehub.ca/widgets/payment-calc.php?cmhc=only&lang=en&ac=954289" style={{height: '320px'}} frameBorder="0"></iframe>
       
        </div>
    );

}

export default Calculators;

