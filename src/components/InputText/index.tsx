type InputTextProps = {} & React.ComponentProps<'input'>;

export function InputText({ ...props }: InputTextProps) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}
