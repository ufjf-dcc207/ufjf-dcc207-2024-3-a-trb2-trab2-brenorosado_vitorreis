interface GraficoQudranteProps{
    title: string
    children: React.ReactNode
}

export default function GraficoQuadrante({title, children}: GraficoQudranteProps){
    return(
        <div className="grafico">
            <p>{title}</p>
            {children}
        </div>
    )
}