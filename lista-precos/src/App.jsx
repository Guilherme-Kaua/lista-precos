import { useState, useMemo } from "react";

const rawData = [
  {
    key: "lata", categoria: "🍺 Cervejas Lata", subtitulo: null, cor: "#f5a623",
    itens: [
      { id: 1, nome: "Amstel", unidade: 4.00, caixa: 42, cartao: 43 },
      { id: 2, nome: "Bohemia", unidade: 4.00, caixa: 42, cartao: 43 },
      { id: 3, nome: "Brahma Chopp", unidade: 4.00, caixa: 42, cartao: 43 },
      { id: 4, nome: "Brahma Duplo Malte", unidade: 4.50, caixa: 45, cartao: 46 },
      { id: 5, nome: "Brahma Zero", unidade: 4.00, caixa: 45, cartao: 46 },
      { id: 6, nome: "Crystal", unidade: 3.50, caixa: 33, cartao: 34 },
      { id: 7, nome: "Heineken", unidade: 6.00, caixa: 62, cartao: 64 },
      { id: 8, nome: "Império Branca", unidade: 4.00, caixa: 40, cartao: 41 },
      { id: 9, nome: "Itaipava", unidade: 3.50, caixa: 35, cartao: 39 },
      { id: 10, nome: "Lokal", unidade: 3.00, caixa: 32, cartao: 33 },
      { id: 11, nome: "Malzbier", unidade: 6.00, caixa: null, cartao: null },
      { id: 12, nome: "Original", unidade: 5.00, caixa: 55, cartao: 56 },
      { id: 13, nome: "Petra", unidade: 4.00, caixa: 38, cartao: 39 },
      { id: 14, nome: "Skol", unidade: 4.00, caixa: 42, cartao: 43 },
      { id: 15, nome: "Skol Beats", unidade: 7.00, caixa: 54, cartao: 56 },
      { id: 16, nome: "Skin", unidade: 3.50, caixa: 36, cartao: 37 },
      { id: 17, nome: "Spaten", unidade: 5.00, caixa: 52, cartao: 54 },
    ],
  },
  {
    key: "long", categoria: "🍻 Cervejas Long", subtitulo: "Pack de 6 unidades", cor: "#c8b060",
    itens: [
      { id: 18, nome: "Budweiser", unidade: 6.00, caixa: 36, cartao: 37 },
      { id: 19, nome: "Cabaré", unidade: 4.50, caixa: 45, cartao: 46 },
      { id: 20, nome: "Corona", unidade: 7.00, caixa: 42, cartao: 43 },
      { id: 21, nome: "Corona", unidade: 8.00, caixa: 45, cartao: 46 },
      { id: 22, nome: "Heineken", unidade: 7.00, caixa: 42, cartao: 43 },
      { id: 23, nome: "Heineken Zero", unidade: 8.00, caixa: 48, cartao: 49 },
    ],
  },
  {
    key: "refri", categoria: "🥤 Refrigerantes", subtitulo: null, cor: "#e63946",
    itens: [
      { id: 24, nome: "Coca (Normal/Zero) 2L", unidade: 12, caixa: null, cartao: null },
      { id: 25, nome: "Fanta 2L", unidade: 11, caixa: null, cartao: null },
      { id: 26, nome: "Sprite 2L", unidade: 11, caixa: null, cartao: null },
      { id: 27, nome: "Pepsi 2L", unidade: 11, caixa: null, cartao: null },
      { id: 28, nome: "Coca 1L", unidade: 8, caixa: null, cartao: null },
      { id: 29, nome: "Fanta 1L", unidade: 7, caixa: null, cartao: null },
      { id: 30, nome: "Indaiá 1L", unidade: 4, caixa: null, cartao: null },
      { id: 31, nome: "Indaiá 2L", unidade: 6, caixa: null, cartao: null },
      { id: 32, nome: "Coquinha 250ml", unidade: 3.50, caixa: null, cartao: null },
    ],
  },
  {
    key: "refri_lata", categoria: "🥤 Refrigerantes Lata", subtitulo: "350ml", cor: "#d63645",
    itens: [
      { id: 33, nome: "Coca (Normal/Zero)", unidade: 4.50, caixa: null, cartao: null },
      { id: 34, nome: "Fanta", unidade: 4.00, caixa: null, cartao: null },
      { id: 35, nome: "Schweppes", unidade: 4.50, caixa: null, cartao: null },
      { id: 36, nome: "Tônica", unidade: 4.50, caixa: null, cartao: null },
    ],
  },
  {
    key: "sucos", categoria: "🧃 Sucos", subtitulo: null, cor: "#e8734a",
    itens: [
      { id: 37, nome: "Citrus", unidade: 8, caixa: null, cartao: null },
      { id: 38, nome: "Dellvalle 1,5L", unidade: 9, caixa: null, cartao: null },
      { id: 39, nome: "Tampico 2L", unidade: 10, caixa: null, cartao: null },
    ],
  },
  {
    key: "energy", categoria: "⚡ Energéticos", subtitulo: null, cor: "#9b59b6",
    itens: [
      { id: 40, nome: "Baly Lata 250ml", unidade: 7, caixa: null, cartao: null },
      { id: 41, nome: "Baly 2L", unidade: 16, caixa: null, cartao: null },
      { id: 42, nome: "Monster 473ml", unidade: 12, caixa: null, cartao: null },
      { id: 43, nome: "Mormaii 1L", unidade: 10, caixa: null, cartao: null },
      { id: 44, nome: "Mormaii 2L", unidade: 16, caixa: null, cartao: null },
      { id: 45, nome: "Night Power 2L", unidade: 16, caixa: null, cartao: null },
      { id: 46, nome: "Red Bull 250ml", unidade: 10, caixa: null, cartao: null },
    ],
  },
  {
    key: "agua", categoria: "💧 Águas & Isotônicos", subtitulo: null, cor: "#4a90e2",
    itens: [
      { id: 47, nome: "Água 1,5L", unidade: 4, caixa: null, cartao: null },
      { id: 48, nome: "Água com Gás 500ml", unidade: 3, caixa: null, cartao: null },
      { id: 49, nome: "Água sem Gás 500ml", unidade: 2, caixa: null, cartao: null },
      { id: 50, nome: "Gatorade", unidade: 6, caixa: null, cartao: null },
      { id: 51, nome: "H2O Limoneto 500ml", unidade: 6, caixa: null, cartao: null },
      { id: 52, nome: "H2O Limoneto e Limão 1,5L", unidade: 10, caixa: null, cartao: null },
    ],
  },
  {
    key: "cigarro", categoria: "🚬 Cigarros & Acessórios", subtitulo: "Caixa = carteira ou pacote", cor: "#b5a898",
    itens: [
      { id: 53, nome: "Rothmans (Azul/Vermelho)", unidade: 1, caixa: 11, cartao: null },
      { id: 54, nome: "Calton", unidade: 2, caixa: 16, cartao: null },
      { id: 55, nome: "Lucky Strike Vermelho", unidade: null, caixa: 13, cartao: null },
      { id: 56, nome: "Lucky Strike Double", unidade: 1, caixa: 14, cartao: null },
      { id: 57, nome: "Derb Azul", unidade: null, caixa: 13, cartao: null },
      { id: 58, nome: "Free do Vermelho", unidade: null, caixa: 13, cartao: null },
      { id: 59, nome: "Gift", unidade: 0.50, caixa: 6, cartao: null },
      { id: 60, nome: "Seda", unidade: 0.50, caixa: 4, cartao: null },
      { id: 61, nome: "Isqueiro BIC Grande", unidade: 6, caixa: null, cartao: null },
      { id: 62, nome: "Fósforo", unidade: 1, caixa: null, cartao: null },
    ],
  },
  {
    key: "salgado", categoria: "🍟 Salgadinhos", subtitulo: null, cor: "#e8a93a",
    itens: [
      { id: 63, nome: "Amendoim 24g", unidade: 1, caixa: null, cartao: null },
      { id: 64, nome: "Amendoim 90g", unidade: 5, caixa: null, cartao: null },
      { id: 65, nome: "Amendoim 100g", unidade: 8, caixa: null, cartao: null },
      { id: 66, nome: "Batatas", unidade: 5, caixa: null, cartao: null },
      { id: 67, nome: "Biscoitos", unidade: 2.50, caixa: null, cartao: null },
      { id: 68, nome: "Bokus", unidade: 2.50, caixa: null, cartao: null },
      { id: 69, nome: "Doritos 32g", unidade: 5, caixa: null, cartao: null },
      { id: 70, nome: "Ki Queijo", unidade: 2, caixa: null, cartao: null },
      { id: 71, nome: "Kro Pipoca", unidade: 2.50, caixa: null, cartao: null },
      { id: 72, nome: "Pippos 75g", unidade: 5, caixa: null, cartao: null },
      { id: 73, nome: "Reizinho Pipoca", unidade: 1, caixa: null, cartao: null },
      { id: 74, nome: "Suncrock 40g", unidade: 2, caixa: null, cartao: null },
    ],
  },
  {
    key: "doce", categoria: "🍬 Doces & Balas", subtitulo: null, cor: "#e8749a",
    itens: [
      { id: 75, nome: "Bombom de Iogurte (5/R$1)", unidade: 1, caixa: null, cartao: null },
      { id: 76, nome: "Chiclete Olhinho", unidade: 0.50, caixa: null, cartao: null },
      { id: 77, nome: "Chiclete Plutonita", unidade: 0.50, caixa: null, cartao: null },
      { id: 78, nome: "Cocada / Pé de Moleque", unidade: 1, caixa: null, cartao: null },
      { id: 79, nome: "Croc Explode (3/R$1)", unidade: 1, caixa: null, cartao: null },
      { id: 80, nome: "Fini", unidade: 2, caixa: null, cartao: null },
      { id: 81, nome: "Gellis Bombom (5/R$1)", unidade: 1, caixa: null, cartao: null },
      { id: 82, nome: "Halls", unidade: 2, caixa: null, cartao: null },
      { id: 83, nome: "Jujuba", unidade: 1, caixa: null, cartao: null },
      { id: 84, nome: "Mentos Bala", unidade: 2, caixa: null, cartao: null },
      { id: 85, nome: "Mentos Chiclete", unidade: 3, caixa: null, cartao: null },
      { id: 86, nome: "Paçoca", unidade: 0.50, caixa: null, cartao: null },
      { id: 87, nome: "Pirulito", unidade: 0.50, caixa: null, cartao: null },
      { id: 88, nome: "Trident", unidade: 3, caixa: null, cartao: null },
    ],
  },
  {
    key: "vinho", categoria: "🍷 Vinhos", subtitulo: null, cor: "#9b3a5a",
    itens: [
      { id: 89, nome: "Carreteiro 900ml", unidade: 7, caixa: null, cartao: null },
      { id: 90, nome: "Pergola Tinto Suave 1L", unidade: 30, caixa: null, cartao: null },
      { id: 91, nome: "Pinheirense 870ml", unidade: 6, caixa: null, cartao: null },
      { id: 92, nome: "Quinta do Morgado Suave", unidade: 16, caixa: null, cartao: null },
    ],
  },
  {
    key: "cachaca", categoria: "🍾 Cachaças", subtitulo: null, cor: "#c07840",
    itens: [
      { id: 93, nome: "Mata Limpa / Caipira 1L", unidade: 16, caixa: null, cartao: null },
      { id: 94, nome: "Mata Limpa Lata 350ml", unidade: 7, caixa: null, cartao: null },
      { id: 95, nome: "Matuta Cristal 1L", unidade: 25, caixa: null, cartao: null },
      { id: 96, nome: "Matuta com Sabor 1L", unidade: 42, caixa: null, cartao: null },
      { id: 97, nome: "Matuta Cristal Lata 270ml", unidade: 8, caixa: null, cartao: null },
      { id: 98, nome: "Matuta Cristal 300ml", unidade: 11, caixa: null, cartao: null },
      { id: 99, nome: "Matuta com Sabor 300ml", unidade: 15, caixa: null, cartao: null },
      { id: 100, nome: "Pitu Normal/Limão Lata 350ml", unidade: 6, caixa: null, cartao: null },
      { id: 101, nome: "Pitu Cristal 1L", unidade: 14, caixa: null, cartao: null },
      { id: 102, nome: "Pitu com Sabor 1L", unidade: 17, caixa: null, cartao: null },
      { id: 103, nome: "São Paulo Cristal 355ml", unidade: 10, caixa: null, cartao: null },
      { id: 104, nome: "São Paulo com Sabor 355ml", unidade: 13, caixa: null, cartao: null },
      { id: 105, nome: "São Paulo com Sabor 1L", unidade: 32, caixa: null, cartao: null },
    ],
  },
  {
    key: "destilado", categoria: "🥃 Destilados", subtitulo: "Vodka · Rum · Whisky", cor: "#7a6aaf",
    itens: [
      { id: 106, nome: "Vodka Slova s/ Sabor", unidade: 16, caixa: null, cartao: null },
      { id: 107, nome: "Vodka Slova c/ Sabor", unidade: 18, caixa: null, cartao: null },
      { id: 108, nome: "Vodka Orloff", unidade: 37, caixa: null, cartao: null },
      { id: 109, nome: "Vodka Sky", unidade: 35, caixa: null, cartao: null },
      { id: 110, nome: "Rum Montilla", unidade: 30, caixa: null, cartao: null },
      { id: 111, nome: "Campari 998ml", unidade: 85, caixa: null, cartao: null },
      { id: 112, nome: "Black & White 1L ⚠", unidade: 85, caixa: null, cartao: null },
      { id: 113, nome: "Whisky Passport", unidade: 55, caixa: null, cartao: null },
      { id: 114, nome: "Whisky Red Label", unidade: 105, caixa: null, cartao: 110 },
      { id: 115, nome: "Whisky Old Par", unidade: 155, caixa: null, cartao: 160 },
    ],
  },
];

const FILTROS = [
  { key: "todos", label: "Todos" },
  { key: "lata", label: "🍺 Lata" },
  { key: "long", label: "🍻 Long" },
  { key: "refri", label: "🥤 Refri" },
  { key: "refri_lata", label: "🥤 Refri Lata" },
  { key: "sucos", label: "🧃 Sucos" },
  { key: "energy", label: "⚡ Energy" },
  { key: "agua", label: "💧 Águas" },
  { key: "cigarro", label: "🚬 Cigarros" },
  { key: "salgado", label: "🍟 Salgados" },
  { key: "doce", label: "🍬 Doces" },
  { key: "vinho", label: "🍷 Vinhos" },
  { key: "cachaca", label: "🍾 Cachaças" },
  { key: "destilado", label: "🥃 Destilados" },
];

const ORDENS = [
  { key: "nome", label: "A → Z" },
  { key: "preco_a", label: "Preço ↑" },
  { key: "preco_d", label: "Preço ↓" },
];

const fmt = (v) =>
  v != null
    ? v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : "—";

export default function App() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [ordem, setOrdem] = useState("nome");

  const dadosFiltrados = useMemo(() => {
    const cats = filtro === "todos"
      ? rawData
      : rawData.filter((c) => c.key === filtro);

    return cats
      .map((cat) => {
        let itens = busca.trim()
          ? cat.itens.filter((i) =>
            i.nome.toLowerCase().includes(busca.toLowerCase())
          )
          : [...cat.itens];

        if (ordem === "nome") itens.sort((a, b) => a.nome.localeCompare(b.nome));
        if (ordem === "preco_a") itens.sort((a, b) => (a.unidade ?? 999) - (b.unidade ?? 999));
        if (ordem === "preco_d") itens.sort((a, b) => (b.unidade ?? 0) - (a.unidade ?? 0));

        return { ...cat, itens };
      })
      .filter((c) => c.itens.length > 0);
  }, [busca, filtro, ordem]);

  const total = rawData.reduce((s, c) => s + c.itens.length, 0);

  const pill = (ativo, onClick, label) => (
    <button
      onClick={onClick}
      style={{
        background: ativo ? "#f5a623" : "#221608",
        color: ativo ? "#1a1209" : "#c8a050",
        border: `1px solid ${ativo ? "#f5a623" : "#443010"}`,
        borderRadius: 20,
        padding: "5px 12px",
        fontSize: 11,
        fontFamily: "monospace",
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontWeight: ativo ? "bold" : "normal",
        letterSpacing: 0.3,
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#1a1209", fontFamily: "'Georgia', serif", padding: "22px 14px 48px" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <div style={{ display: "inline-block", border: "2px solid #f5a623", borderRadius: 4, padding: "5px 18px", marginBottom: 3 }}>
          <span style={{ color: "#f5a623", fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontFamily: "monospace" }}>
            Lista de Preços
          </span>
        </div>
        <p style={{ color: "#7a6a50", fontSize: 11, margin: 0, fontFamily: "monospace" }}>
          {total} produtos · 06/06/2026
        </p>
      </div>

      {/* Busca */}
      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="🔍  Buscar produto…"
        style={{
          width: "100%", boxSizing: "border-box",
          background: "#221608", border: "1px solid #443010",
          borderRadius: 8, padding: "9px 14px",
          color: "#f0dbb0", fontSize: 13, fontFamily: "monospace",
          outline: "none", marginBottom: 12,
        }}
      />

      {/* Filtros de categoria */}
      <div style={{ marginBottom: 8 }}>
        <p style={{ color: "#7a6a50", fontSize: 9, fontFamily: "monospace", letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px 2px" }}>
          Categoria
        </p>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 6 }}>
          {FILTROS.map((f) =>
            pill(filtro === f.key, () => setFiltro(f.key), f.label)
          )}
        </div>
      </div>

      {/* Ordenação */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ color: "#7a6a50", fontSize: 9, fontFamily: "monospace", letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px 2px" }}>
          Ordenar por
        </p>
        <div style={{ display: "flex", gap: 6 }}>
          {ORDENS.map((o) =>
            pill(ordem === o.key, () => setOrdem(o.key), o.label)
          )}
        </div>
      </div>

      {/* Resultados */}
      {dadosFiltrados.length === 0 && (
        <p style={{ color: "#7a6a50", textAlign: "center", fontFamily: "monospace", fontSize: 13 }}>
          Nenhum produto encontrado.
        </p>
      )}

      {dadosFiltrados.map((cat) => (
        <div key={cat.key} style={{ marginBottom: 26 }}>

          {/* Título da categoria */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ flex: 1, height: 1, background: cat.cor + "44" }} />
            <div style={{ textAlign: "center" }}>
              <span style={{ color: cat.cor, fontSize: 14, fontWeight: "bold", letterSpacing: 1 }}>
                {cat.categoria}
              </span>
              {cat.subtitulo && (
                <div style={{ color: cat.cor + "99", fontSize: 10, fontFamily: "monospace", letterSpacing: 0.5 }}>
                  {cat.subtitulo}
                </div>
              )}
            </div>
            <div style={{ flex: 1, height: 1, background: cat.cor + "44" }} />
          </div>

          {/* Cabeçalho da tabela */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 72px 68px 68px", padding: "0 12px 5px" }}>
            {["Produto", "Unidade", "Caixa¹", "Cartão"].map((h) => (
              <span key={h} style={{ color: "#7a6a50", fontSize: 9, letterSpacing: 1, textTransform: "uppercase", fontFamily: "monospace", textAlign: h === "Produto" ? "left" : "center" }}>
                {h}
              </span>
            ))}
          </div>

          {/* Linhas */}
          {cat.itens.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#221608",
                border: "1px solid #332510",
                borderRadius: 8,
                padding: "9px 12px",
                marginBottom: 5,
                display: "grid",
                gridTemplateColumns: "1fr 72px 68px 68px",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#f0dbb0", fontSize: 13, fontWeight: "bold" }}>
                {item.nome}
              </span>

              <div style={{ textAlign: "center" }}>
                <span style={{ color: item.unidade != null ? cat.cor : "#3a2e1e", fontSize: 13, fontWeight: "bold" }}>
                  {fmt(item.unidade)}
                </span>
              </div>

              <div style={{ textAlign: "center" }}>
                <span style={{ color: item.caixa != null ? "#f0dbb0" : "#3a2e1e", fontSize: 12 }}>
                  {fmt(item.caixa)}
                </span>
              </div>

              <div style={{ textAlign: "center" }}>
                <span style={{ color: item.cartao != null ? "#f0dbb0" : "#3a2e1e", fontSize: 12 }}>
                  {fmt(item.cartao)}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Rodapé */}
      <div style={{ borderTop: "1px solid #332510", paddingTop: 14, marginTop: 4 }}>
        <p style={{ color: "#7a6a50", fontSize: 11, fontFamily: "monospace", margin: 0, lineHeight: 1.8 }}>
          ¹ Caixa: à vista ou Pix. Cigarros: Caixa = carteira.<br />
          Cervejas Long: todas em pack de 6 unidades.<br />
          ⚠ Black &amp; White: preço a confirmar.
        </p>
      </div>
    </div>
  );
}