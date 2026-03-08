function CardBeneficio({ icone, alt, titulo, descricao }) {
  return (
    <div className="agri-card d-flex align-items-start gap-3 mb-3">
      <img src={icone} alt={alt} width="48" />

      <div>
        <h5 className="fw-semibold">{titulo}</h5>
        <p className="mb-0">{descricao}</p>
      </div>
    </div>
  )
}

export default CardBeneficio