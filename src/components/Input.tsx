interface InputProps {
    placeholder: string;
    type: string;
    value: string;
    
}

export default function Input({placeholder, type}: InputProps) {
    return(
        <>
            <input type={type} placeholder={placeholder}/>
        </>
    )
}