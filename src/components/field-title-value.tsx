
type FieldTitleValueProps = {
    title: string,
    value: string | string[] | number | null
}

const FieldTitleValue: React.FC<FieldTitleValueProps> = ({title, value}) => {
    console.log(typeof(value))

    if(value === null){
        return (
            <div>
                <p className="font-bold text-lg text-primary">{title}</p>
                <p className="text-sm">Não informado</p>
            </div>
        )
    }

    if(Array.isArray(value)){
        return (
            <div>
                <p className="font-bold text-md text-primary">{title}</p>
                <ul>
                    {value.map((v, index) => (
                        <li className="text-sm" key={index}>{v}</li>
                    ))}
                </ul>
            </div>
        )
    }

  return (
    <div>
      <p className="font-bold text-lg text-primary">{title}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default FieldTitleValue;
