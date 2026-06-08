import { useMemo, useState } from "react";

const rawData = [
  {
    key: "lata",
    categoria: "🍺 Cervejas Lata",
    subtitulo: "Todas 350ml • Skol Beats 269ml",
    cor: "#f5a623",
    itens: [
      { id: 1, nome: "Amstel 350ml", unidade: 4.0, caixa: 42, cartao: 43 },
      { id: 2, nome: "Bohemia 350ml", unidade: 4.0, caixa: 42, cartao: 43 },
      { id: 3, nome: "Brahma Chopp 350ml", unidade: 4.0, caixa: 42, cartao: 43 },
      { id: 4, nome: "Brahma Duplo Malte 350ml", unidade: 4.5, caixa: 45, cartao: 46 },
      { id: 5, nome: "Brahma Zero 350ml", unidade: 4.0, caixa: 45, cartao: 46 },
      { id: 6, nome: "Crystal 350ml", unidade: 3.5, caixa: 33, cartao: 34 },
      { id: 7, nome: "Heineken 350ml", unidade: 6.0, caixa: 62, cartao: 64 },
      { id: 8, nome: "Império Branca 350ml", unidade: 4.0, caixa: 40, cartao: 41 },
      { id: 9, nome: "Itaipava 350ml", unidade: 3.5, caixa: 35, cartao: 36 },
      { id: 10, nome: "Lokal 350ml", unidade: 3.0, caixa: 32, cartao: 33 },
      { id: 11, nome: "Malzbier 350ml", unidade: 6.0, caixa: null, cartao: null },
      { id: 12, nome: "Original 350ml", unidade: 5.0, caixa: 55, cartao: 56 },
      { id: 13, nome: "Petra 350ml", unidade: 4.0, caixa: 38, cartao: 39 },
      { id: 14, nome: "Skol 350ml", unidade: 4.0, caixa: 42, cartao: 43 },
      { id: 15, nome: "Skol Beats 269ml", unidade: 7.0, caixa: 54, cartao: 56 },
      { id: 16, nome: "Skin 350ml", unidade: 3.5, caixa: 36, cartao: 37 },
      { id: 17, nome: "Spaten 350ml", unidade: 5.0, caixa: 52, cartao: 54 },
    ],
  },
  {
    key: "long",
    categoria: "🍻 Cervejas Long",
    subtitulo: "Todas 330ml • Pack de 6 unidades",
    cor: "#c8b060",
    itens: [
      { id: 18, nome: "Budweiser 330ml", unidade: 6.0, caixa: 36, cartao: 37 },
      { id: 19, nome: "Cabaré 330ml", unidade: 4.5, caixa: 45, cartao: 46 },
      { id: 20, nome: "Corona Long Normal 330ml", unidade: 7.0, caixa: 42, cartao: 43 },
      { id: 21, nome: "Corona Long Zero 330ml", unidade: 8.0, caixa: 45, cartao: 46 },
      { id: 22, nome: "Heineken Long 330ml", unidade: 7.0, caixa: 42, cartao: 43 },
      { id: 23, nome: "Heineken Zero Long 330ml", unidade: 8.0, caixa: 48, cartao: 49 },
    ],
  },
  {
    key: "refri",
    categoria: "🥤 Refrigerantes",
    subtitulo: "Garrafas",
    cor: "#e63946",
    itens: [
      { id: 24, nome: "Coca (Normal/Zero) 2L", unidade: 12, caixa: null, cartao: null },
      { id: 25, nome: "Fanta 2L", unidade: 11, caixa: null, cartao: null },
      { id: 26, nome: "Sprite 2L", unidade: 11, caixa: null, cartao: null },
      { id: 27, nome: "Pepsi 2L", unidade: 11, caixa: null, cartao: null },
      { id: 28, nome: "Coca 1L", unidade: 8, caixa: null, cartao: null },
      { id: 29, nome: "Fanta 1L", unidade: 7, caixa: null, cartao: null },
      { id: 30, nome: "Indaiá 1L", unidade: 4, caixa: null, cartao: null },
      { id: 31, nome: "Indaiá 2L", unidade: 6, caixa: null, cartao: null },
      { id: 32, nome: "Coquinha 250ml", unidade: 3.5, caixa: null, cartao: null },
    ],
  },
  {
    key: "refri_lata",
    categoria: "🥤 Refrigerantes Lata",
    subtitulo: "Todas 350ml",
    cor: "#d63645",
    itens: [
      { id: 33, nome: "Coca (Normal/Zero) 350ml", unidade: 4.5, caixa: null, cartao: null },
      { id: 34, nome: "Fanta 350ml", unidade: 4.0, caixa: null, cartao: null },
      { id: 35, nome: "Schweppes 350ml", unidade: 4.5, caixa: null, cartao: null },
      { id: 36, nome: "Tônica 350ml", unidade: 4.5, caixa: null, cartao: null },
    ],
  },
  {
    key: "sucos",
    categoria: "🧃 Sucos",
    subtitulo: "Citrus 1L tem acréscimo menor",
    cor: "#e8734a",
    itens: [
      { id: 37, nome: "Citrus 1L", unidade: 8, caixa: null, cartao: 8.5 },
      { id: 38, nome: "Dellvalle 1,5L", unidade: 9, caixa: null, cartao: null },
      { id: 39, nome: "Tampico 2L", unidade: 10, caixa: null, cartao: null },
    ],
  },
  {
    key: "energy",
    categoria: "⚡ Energéticos",
    subtitulo: "Sozinhos sem acréscimo no cartão",
    cor: "#9b59b6",
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
    key: "agua",
    categoria: "💧 Águas & Isotônicos",
    subtitulo: "Água sem gás tem acréscimo menor",
    cor: "#4a90e2",
    itens: [
      { id: 47, nome: "Água 1,5L", unidade: 4, caixa: null, cartao: null },
      { id: 48, nome: "Água com Gás 500ml", unidade: 3, caixa: null, cartao: null },
      { id: 49, nome: "Água sem Gás 500ml", unidade: 2, caixa: null, cartao: 2.5 },
      { id: 50, nome: "Gatorade", unidade: 6, caixa: null, cartao: null },
      { id: 51, nome: "H2O Limoneto 500ml", unidade: 6, caixa: null, cartao: null },
      { id: 52, nome: "H2O Limoneto e Limão 1,5L", unidade: 10, caixa: null, cartao: null },
    ],
  },
  {
    key: "cigarro",
    categoria: "🚬 Cigarros & Acessórios",
    subtitulo: "Caixa = carteira ou pacote • Isqueiro com acréscimo menor",
    cor: "#b5a898",
    itens: [
      { id: 53, nome: "Rothmans (Azul/Vermelho)", unidade: 1, caixa: 11, cartao: 12 },
      { id: 54, nome: "Calton", unidade: 2, caixa: 16, cartao: 17 },
      { id: 55, nome: "Lucky Strike Vermelho", unidade: null, caixa: 13, cartao: 14 },
      { id: 56, nome: "Lucky Strike Double", unidade: 1, caixa: 14, cartao: 15 },
      { id: 57, nome: "Derb Azul", unidade: null, caixa: 13, cartao: 14 },
      { id: 58, nome: "Free do Vermelho", unidade: null, caixa: 13, cartao: 14 },
      { id: 59, nome: "Gift", unidade: 0.5, caixa: 6, cartao: 7 },
      { id: 60, nome: "Seda", unidade: 0.5, caixa: 4, cartao: null },
      { id: 61, nome: "Isqueiro BIC Grande", unidade: 6, caixa: null, cartao: 6.5 },
      { id: 62, nome: "Fósforo", unidade: 1, caixa: null, cartao: null },
    ],
  },
  {
    key: "salgado",
    categoria: "🍟 Salgadinhos",
    subtitulo: "Sem acréscimo no cartão quando sozinho",
    cor: "#e8a93a",
    itens: [
      { id: 63, nome: "Amendoim 24g", unidade: 1, caixa: null, cartao: null },
      { id: 64, nome: "Amendoim 90g", unidade: 5, caixa: null, cartao: null },
      { id: 65, nome: "Amendoim 100g", unidade: 8, caixa: null, cartao: null },
      { id: 66, nome: "Batatas", unidade: 5, caixa: null, cartao: null },
      { id: 67, nome: "Biscoitos", unidade: 2.5, caixa: null, cartao: null },
      { id: 68, nome: "Bokus", unidade: 2.5, caixa: null, cartao: null },
      { id: 69, nome: "Doritos 32g", unidade: 5, caixa: null, cartao: null },
      { id: 70, nome: "Ki Queijo", unidade: 2, caixa: null, cartao: null },
      { id: 71, nome: "Kro Pipoca", unidade: 2.5, caixa: null, cartao: null },
      { id: 72, nome: "Pippos 75g", unidade: 5, caixa: null, cartao: null },
      { id: 73, nome: "Reizinho Pipoca", unidade: 1, caixa: null, cartao: null },
      { id: 74, nome: "Suncrock 40g", unidade: 2, caixa: null, cartao: null },
    ],
  },
  {
    key: "doce",
    categoria: "🍬 Doces & Balas",
    subtitulo: "Sem acréscimo no cartão quando sozinho",
    cor: "#e8749a",
    itens: [
      { id: 75, nome: "Bombom de Iogurte (5/R$1)", unidade: 1, caixa: null, cartao: null },
      { id: 76, nome: "Chiclete Olhinho", unidade: 0.5, caixa: null, cartao: null },
      { id: 77, nome: "Chiclete Plutonita", unidade: 0.5, caixa: null, cartao: null },
      { id: 78, nome: "Cocada / Pé de Moleque", unidade: 1, caixa: null, cartao: null },
      { id: 79, nome: "Croc Explode (3/R$1)", unidade: 1, caixa: null, cartao: null },
      { id: 80, nome: "Fini", unidade: 2, caixa: null, cartao: null },
      { id: 81, nome: "Gellis Bombom (5/R$1)", unidade: 1, caixa: null, cartao: null },
      { id: 82, nome: "Halls", unidade: 2, caixa: null, cartao: null },
      { id: 83, nome: "Jujuba", unidade: 1, caixa: null, cartao: null },
      { id: 84, nome: "Mentos Bala", unidade: 2, caixa: null, cartao: null },
      { id: 85, nome: "Mentos Chiclete", unidade: 3, caixa: null, cartao: null },
      { id: 86, nome: "Paçoca", unidade: 0.5, caixa: null, cartao: null },
      { id: 87, nome: "Pirulito", unidade: 0.5, caixa: null, cartao: null },
      { id: 88, nome: "Trident", unidade: 3, caixa: null, cartao: null },
    ],
  },
  {
    key: "vinho",
    categoria: "🍷 Vinhos",
    subtitulo: "Quinta do Morgado 750ml = R$16,50 no cartão",
    cor: "#9b3a5a",
    itens: [
      { id: 89, nome: "Carreteiro 900ml", unidade: 7, caixa: null, cartao: 8 },
      { id: 90, nome: "Pergola Tinto Suave 1L", unidade: 30, caixa: null, cartao: 31 },
      { id: 91, nome: "Pinheirense 870ml", unidade: 6, caixa: null, cartao: 7 },
      { id: 92, nome: "Quinta do Morgado 750ml", unidade: 16, caixa: null, cartao: 16.5 },
    ],
  },
  {
    key: "cachaca",
    categoria: "🍾 Cachaças",
    subtitulo: "Acréscimo de R$1,00 no cartão",
    cor: "#c07840",
    itens: [
      { id: 93, nome: "Mata Limpa / Caipira 1L", unidade: 16, caixa: null, cartao: 17 },
      { id: 94, nome: "Mata Limpa Lata 350ml", unidade: 7, caixa: null, cartao: 8 },
      { id: 95, nome: "Matuta Cristal 1L", unidade: 25, caixa: null, cartao: 26 },
      { id: 96, nome: "Matuta com Sabor 1L", unidade: 42, caixa: null, cartao: 43 },
      { id: 97, nome: "Matuta Cristal Lata 270ml", unidade: 8, caixa: null, cartao: 9 },
      { id: 98, nome: "Matuta Cristal 300ml", unidade: 11, caixa: null, cartao: 12 },
      { id: 99, nome: "Matuta com Sabor 300ml", unidade: 15, caixa: null, cartao: 16 },
      { id: 100, nome: "Pitu Normal/Limão Lata 350ml", unidade: 6, caixa: null, cartao: 7 },
      { id: 101, nome: "Pitu Cristal 1L", unidade: 14, caixa: null, cartao: 15 },
      { id: 102, nome: "Pitu com Sabor 1L", unidade: 17, caixa: null, cartao: 18 },
      { id: 103, nome: "São Paulo Cristal 355ml", unidade: 10, caixa: null, cartao: 11 },
      { id: 104, nome: "São Paulo com Sabor 355ml", unidade: 13, caixa: null, cartao: 14 },
      { id: 105, nome: "São Paulo com Sabor 1L", unidade: 32, caixa: null, cartao: 33 },
    ],
  },
  {
    key: "destilado",
    categoria: "🥃 Destilados",
    subtitulo: "Vodka • Rum Montilla 1L",
    cor: "#7a6aaf",
    itens: [
      { id: 106, nome: "Vodka Slova s/ Sabor", unidade: 16, caixa: null, cartao: 17 },
      { id: 107, nome: "Vodka Slova c/ Sabor", unidade: 18, caixa: null, cartao: 19 },
      { id: 108, nome: "Vodka Orloff", unidade: 37, caixa: null, cartao: 38 },
      { id: 109, nome: "Vodka Sky", unidade: 35, caixa: null, cartao: 36 },
      { id: 110, nome: "Rum Montilla 1L", unidade: 30, caixa: null, cartao: 31 },
      { id: 111, nome: "Campari 998ml", unidade: 85, caixa: null, cartao: null },
      { id: 112, nome: "Black & White 1L ⚠", unidade: 85, caixa: null, cartao: null },
      { id: 113, nome: "Whisky Passport", unidade: 55, caixa: null, cartao: null },
      { id: 114, nome: "Whisky Red Label", unidade: 105, caixa: null, cartao: 110 },
      { id: 115, nome: "Whisky Old Par", unidade: 155, caixa: null, cartao: 160 },
    ],
  },
];

const fmt = (v) =>
  v != null ? v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "—";

const resolveCartao = (catKey, item) => {
  const base = item.unidade;
  if (base == null) return item.cartao ?? null;

  const nome = item.nome.toLowerCase();

  if (base <= 2) return base;

  if (catKey === "energy") return base;

  if (catKey === "sucos") {
    if (nome.includes("citrus")) return 8.5;
    return item.cartao ?? base;
  }

  if (catKey === "agua") {
    if (nome.includes("sem gás")) return 2.5;
    return item.cartao ?? base;
  }

  if (catKey === "vinho") {
    if (nome.includes("quinta do morgado")) return 16.5;
    return base + 1;
  }

  if (catKey === "cachaca") {
    return base + 1;
  }

  if (catKey === "destilado") {
    if (nome.includes("vodka") || nome.includes("rum montilla")) return base + 1;
    return item.cartao ?? base;
  }

  if (catKey === "cigarro") {
    if (nome.includes("isqueiro")) return base + 0.5;

    if (
      nome.includes("rothmans") ||
      nome.includes("calton") ||
      nome.includes("lucky strike") ||
      nome.includes("derb") ||
      nome.includes("free")
    ) {
      return base + 1;
    }

    return base;
  }

  if (catKey === "doce" || catKey === "salgado") {
    return base;
  }

  return item.cartao ?? base;
};

const categorias = rawData.map((cat) => ({
  key: cat.key,
  nome: cat.categoria,
  subtitulo: cat.subtitulo,
  cor: cat.cor,
  total: cat.itens.length,
  itens: cat.itens,
}));

export default function App() {
  const [busca, setBusca] = useState("");
  const [selectedKey, setSelectedKey] = useState("lata");
  const [ordem, setOrdem] = useState("nome");

  const selectedCategory = useMemo(() => {
    return rawData.find((c) => c.key === selectedKey) ?? rawData[0];
  }, [selectedKey]);

  const itensVisiveis = useMemo(() => {
    const cat = selectedCategory;
    if (!cat) return [];

    let itens = busca.trim()
      ? cat.itens.filter((i) => i.nome.toLowerCase().includes(busca.toLowerCase()))
      : [...cat.itens];

    if (ordem === "nome") itens.sort((a, b) => a.nome.localeCompare(b.nome));
    if (ordem === "preco_a") itens.sort((a, b) => (a.unidade ?? 999) - (b.unidade ?? 999));
    if (ordem === "preco_d") itens.sort((a, b) => (b.unidade ?? 0) - (a.unidade ?? 0));

    return itens;
  }, [busca, ordem, selectedCategory]);

  const total = rawData.reduce((s, c) => s + c.itens.length, 0);

  const pill = (ativo, onClick, label) => (
    <button
      onClick={onClick}
      style={{
        background: ativo ? "#f5a623" : "#221608",
        color: ativo ? "#1a1209" : "#c8a050",
        border: `1px solid ${ativo ? "#f5a623" : "#443010"}`,
        borderRadius: 18,
        padding: "6px 12px",
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
    <div
      style={{
        minHeight: "100vh",
        background: "#1a1209",
        fontFamily: "'Georgia', serif",
        padding: "18px 12px 30px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <div
          style={{
            display: "inline-block",
            border: "2px solid #f5a623",
            borderRadius: 6,
            padding: "6px 18px",
            marginBottom: 4,
            background: "#221608",
          }}
        >
          <span
            style={{
              color: "#f5a623",
              fontSize: 11,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Lista de Preços
          </span>
        </div>
        <p style={{ color: "#8d7a58", fontSize: 11, margin: 0, fontFamily: "monospace" }}>
          {total} produtos · 08/06/2026
        </p>
      </div>

      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="🔍 Buscar dentro da categoria…"
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "#221608",
          border: "1px solid #443010",
          borderRadius: 10,
          padding: "11px 14px",
          color: "#f0dbb0",
          fontSize: 13,
          fontFamily: "monospace",
          outline: "none",
          marginBottom: 12,
        }}
      />

      <div style={{ marginBottom: 14 }}>
        <p
          style={{
            color: "#8d7a58",
            fontSize: 9,
            fontFamily: "monospace",
            letterSpacing: 1,
            textTransform: "uppercase",
            margin: "0 0 8px 2px",
          }}
        >
          Hub de categorias
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(96px, 1fr))",
            gap: 10,
          }}
        >
          {categorias.map((cat) => {
            const ativo = selectedKey === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedKey(cat.key)}
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: 14,
                  border: `1px solid ${ativo ? cat.cor : cat.cor + "55"}`,
                  background: ativo
                    ? `linear-gradient(180deg, ${cat.cor}22, #221608)`
                    : "#201406",
                  boxShadow: ativo ? `0 0 0 1px ${cat.cor}55 inset` : "none",
                  color: "#f0dbb0",
                  padding: 10,
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: cat.cor,
                      boxShadow: `0 0 12px ${cat.cor}66`,
                    }}
                  />
                  <span
                    style={{
                      color: ativo ? cat.cor : "#8d7a58",
                      fontSize: 10,
                      fontFamily: "monospace",
                    }}
                  >
                    {cat.total} itens
                  </span>
                </div>

                <div>
                  <div
                    style={{
                      color: ativo ? "#fff4d6" : "#f0dbb0",
                      fontSize: 13,
                      lineHeight: 1.15,
                      fontWeight: "bold",
                    }}
                  >
                    {cat.nome}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <p
          style={{
            color: "#8d7a58",
            fontSize: 9,
            fontFamily: "monospace",
            letterSpacing: 1,
            textTransform: "uppercase",
            margin: "0 0 6px 2px",
          }}
        >
          Ordenar itens
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[
            { key: "nome", label: "A → Z" },
            { key: "preco_a", label: "Preço ↑" },
            { key: "preco_d", label: "Preço ↓" },
          ].map((o) => pill(ordem === o.key, () => setOrdem(o.key), o.label))}
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <div style={{ flex: 1, height: 1, background: selectedCategory.cor + "55" }} />
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                color: selectedCategory.cor,
                fontSize: 14,
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              {selectedCategory.categoria}
            </span>
          </div>
          <div style={{ flex: 1, height: 1, background: selectedCategory.cor + "55" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 72px 68px 68px",
            padding: "0 12px 5px",
          }}
        >
          {["Produto", "Unidade", "Caixa¹", "Cartão"].map((h) => (
            <span
              key={h}
              style={{
                color: "#8d7a58",
                fontSize: 9,
                letterSpacing: 1,
                textTransform: "uppercase",
                fontFamily: "monospace",
                textAlign: h === "Produto" ? "left" : "center",
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {itensVisiveis.length === 0 ? (
          <p style={{ color: "#8d7a58", textAlign: "center", fontFamily: "monospace", fontSize: 13 }}>
            Nenhum produto encontrado.
          </p>
        ) : (
          itensVisiveis.map((item) => {
            const cartao = resolveCartao(selectedCategory.key, item);

            return (
              <div
                key={item.id}
                style={{
                  background: "#221608",
                  border: "1px solid #332510",
                  borderRadius: 10,
                  padding: "10px 12px",
                  marginBottom: 6,
                  display: "grid",
                  gridTemplateColumns: "1fr 72px 68px 68px",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#f0dbb0", fontSize: 13, fontWeight: "bold" }}>
                  {item.nome}
                </span>

                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      color: item.unidade != null ? selectedCategory.cor : "#3a2e1e",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    {fmt(item.unidade)}
                  </span>
                </div>

                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      color: item.caixa != null ? "#f0dbb0" : "#3a2e1e",
                      fontSize: 12,
                    }}
                  >
                    {fmt(item.caixa)}
                  </span>
                </div>

                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      color: cartao != null ? "#f0dbb0" : "#3a2e1e",
                      fontSize: 12,
                    }}
                  >
                    {fmt(cartao)}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div
        style={{
          marginTop: 14,
          background: "#201406",
          border: "1px solid #4b3a20",
          borderRadius: 14,
          padding: "14px 14px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
        }}
      >
        <p
          style={{
            color: "#f0dbb0",
            fontSize: 11,
            fontFamily: "monospace",
            margin: 0,
            lineHeight: 1.9,
          }}
        >
          <strong style={{ color: "#f5a623" }}>Regras do cartão:</strong>
          <br />
          • A partir de R$50 na soma da conta, o acréscimo passa para R$2,00.
          <br />
          • Itens de até R$2,00 não recebem acréscimo.
          <br />
          • Doces, salgados e energéticos sozinhos não têm acréscimo.
          <br />
          • Vodka, Rum Montilla 1L, vinhos e cachaças: +R$1,00.
          <br />
          • Cigarros em carteira ou pacote: +R$1,00 (Caixa = carteira/pacote).
          <br />
          • Citrus 1L e água sem gás: +R$0,50.
          <br />
          • Isqueiro: +R$0,50.
          <br />
          • Quinta do Morgado 750ml: R$16,50 no cartão.
          <br />
          • Cervejas lata: 350ml, exceto Skol Beats 269ml.
          <br />
          • Cervejas long: 330ml (Pack = 6 unidades).
        </p>
      </div>
    </div>
  );
}