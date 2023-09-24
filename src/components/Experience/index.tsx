import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Experience(props: Props) {
  const { ...rest } = props;

  return (
    <section className={styles.container} {...rest}>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste,
        ipsum ad beatae consequuntur maiores amet quaerat velit quae eos.
        Placeat, quibusdam dolor aspernatur perspiciatis a ipsa fugit corrupti
        tenetur?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste,
        ipsum ad beatae consequuntur maiores amet quaerat velit quae eos.
        Placeat, quibusdam dolor aspernatur perspiciatis a ipsa fugit corrupti
        tenetur?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste,
        ipsum ad beatae consequuntur maiores amet quaerat velit quae eos.
        Placeat, quibusdam dolor aspernatur perspiciatis a ipsa fugit corrupti
        tenetur?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste,
        ipsum ad beatae consequuntur maiores amet quaerat velit quae eos.
        Placeat, quibusdam dolor aspernatur perspiciatis a ipsa fugit corrupti
        tenetur?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste,
        ipsum ad beatae consequuntur maiores amet quaerat velit quae eos.
        Placeat, quibusdam dolor aspernatur perspiciatis a ipsa fugit corrupti
        tenetur?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste,
        ipsum ad beatae consequuntur maiores amet quaerat velit quae eos.
        Placeat, quibusdam dolor aspernatur perspiciatis a ipsa fugit corrupti
        tenetur?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iste,
        ipsum ad beatae consequuntur maiores amet quaerat velit quae eos.
        Placeat, quibusdam dolor aspernatur perspiciatis a ipsa fugit corrupti
        tenetur?
      </h1>
    </section>
  );
}
