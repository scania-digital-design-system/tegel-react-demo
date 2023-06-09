interface TabsPanelsProps {
  index: number;
}

const TabsPanels = ({ index }: TabsPanelsProps) => {
  return (
    <div className="tds-background-grey-50 tds-u-p2">
      <div hidden={index !== 0}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea optio
        reiciendis suscipit porro veniam? Neque asperiores aut consequuntur
        delectus ullam facilis nihil rerum, beatae doloribus officiis? Sit
        tempora sapiente ducimus iste recusandae delectus quos ratione totam
        earum beatae, voluptate officiis obcaecati! Excepturi corrupti sequi
        neque iure ex obcaecati, non laboriosam.
      </div>
      <div hidden={index !== 1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reiciendis facilis ea explicabo aliquam qui deleniti provident odio
        doloremque! Ullam eum dicta tempora nisi officia itaque illo autem minus
        consequuntur ratione, accusantium distinctio neque, odit voluptatibus
        veniam quia cumque necessitatibus sint nobis! Aliquam corrupti omnis,
        reprehenderit numquam quam earum voluptatibus?
      </div>
      <div hidden={index !== 2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolorum
        suscipit excepturi, placeat magni ea ad quod veniam tempore deleniti
        mollitia. Recusandae error odio quasi? In error nam officiis repellat
        nostrum cum perspiciatis dolor, possimus quaerat enim. Corporis sunt
        earum sit eos consequuntur dolores ipsum quasi, provident quis nisi
        necessitatibus?
      </div>
    </div>
  );
};

export default TabsPanels;
