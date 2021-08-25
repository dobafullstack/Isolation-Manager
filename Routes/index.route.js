

export default function router(app) {
    app.get('/', (req, res) => {
        res.send('Isolate Manager');
    })
}