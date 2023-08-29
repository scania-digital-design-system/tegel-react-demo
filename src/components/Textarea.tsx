const Textarea = () => {
    return (
        <>
            <div className="tds-headline-02 tds-u-pb1">Textarea</div>
            <tds-textarea
                rows={4}
                state="error"
                label="Hello label"
                helper="Good guess, but wrong answer buddy"
                label-position="outside"
                placeholder="Placeholder test"
            ></tds-textarea>
        </>
    );
};

export default Textarea;
