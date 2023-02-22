const Card = () => {
  return (
    <sdds-card
      clickable
      header="Header text"
      header-placement="below"
      subheader="Subheader text"
      header-img="https://www.svgrepo.com/show/170303/avatar.svg"
      body-img="https://www.svgrepo.com/show/170303/avatar.svg"
    >
      <div slot="card-bottom">
        <sdds-icon style={{ fontSize: "20px;" }} name="arrow_right"></sdds-icon>
      </div>
    </sdds-card>
  );
};

export default Card;
