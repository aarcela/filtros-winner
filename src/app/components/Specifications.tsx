interface SpecificationsProps {
    onChange: (value: string) => void;
    name: string;
    value: string;
}

export default function Specifications({ onChange, name, value }: SpecificationsProps) {
    return (
        <div className="w-1/2 mb-1">
            <div className="flex">
                <span className="w-1/3">{name}</span>
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    type="text"
                    className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                />
            </div>
        </div>
    );
}
