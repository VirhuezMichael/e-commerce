const styles = {
    floatingButton: {
      position: "fixed",
      bottom: 20,
      right: 20,
      backgroundColor: "#25D366",
      color: "#FFFFFF",
      borderRadius: 50,
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "2px 2px 3px #999",
      cursor: "pointer",
    },
    fa: {
      fontSize: "20px",
    },
  };

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=1234567890&text=Hola%20¿En%20qué%20puedo%20ayudarte?"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.floatingButton}>
        <i className={`fa fa-whatsapp ${styles.fa}`}></i>
      </div>
    </a>
  );
};

export default WhatsappButton;
