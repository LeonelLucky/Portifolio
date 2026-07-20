import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from "react";

/**
 * ===== CONCEITO 1: O QUE É UM "COMPONENTE" =====
 * Em React, tudo é feito de componentes(compare com os widget em dart). Um componente é só uma
 * função do JavaScript que devolve HTML "disfarçado" (isso se chama JSX).
 *
 * Essa função aqui embaixo, "Portfolio", É o site inteiro (por enquanto).
 * Repare que ela termina com "return (...)" e dentro do return tem
 * coisa que parece HTML — mas na verdade é JSX.
 */
export default function Portfolio() {
  /**
   * ===== CONCEITO 2: "STATE" (ESTADO) =====
   * useState é uma função especial do React (chamada de "Hook").
   * Ela cria uma variável que, quando muda, faz a tela atualizar sozinha.
   *
   * Aqui: "menuAberto" começa como "false" (falso).
   * "setMenuAberto" é a função que eu uso pra MUDAR esse valor.
   * Isso vai controlar o menu no celular (aberto/fechado).
   */
  const [menuAberto, setMenuAberto] = useState(false);

  // Troque essas informações pelas suas!
  const meuNome = "Lucas Leonel";
  const minhaFrase = "Estou aprendendo a construir para a web.";

  /**
   * ===== CONCEITO 3: LISTAS DE DADOS + .map() =====
   * Em vez de escrever cada link do menu na mão, guardo tudo num array
   * (uma lista) e uso ".map()" pra transformar essa lista em elementos
   * na tela. Isso evita repetir código.
   */
  const linksMenu = [
    { texto: "Sobre", href: "#sobre" },
    { texto: "Projetos", href: "#projetos" },
    { texto: "Contato", href: "#contato" },
  ];

  return (
    // Fragmento vazio <> </> : agrupa elementos sem criar uma div extra na tela
    <div className="min-h-screen bg-[#f7f4ee] text-[#1c2541]">
      {/* ===== CABEÇALHO / MENU ===== */}
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <span className="font-mono text-sm tracking-widest text-[#1c2541]/70">
          {meuNome.toUpperCase()}
        </span>

        {/* Menu normal — some no celular */}
        <nav className="hidden gap-8 md:flex">
          {/*
            Aqui uso o .map() que expliquei acima.
            Pra cada "link" da lista "linksMenu", crio um <a> na tela.
            O "key" é obrigatório: o React usa isso pra saber
            qual item é qual quando a lista muda.
          */}
          {linksMenu.map((link) => (
            <a
              key={link.texto}
              href={link.href}
              className="text-sm font-medium text-[#1c2541]/80 transition hover:text-[#c9702b]"
            >
              {link.texto}
            </a>
          ))}
        </nav>

        {/* Botão hambúrguer — só aparece no celular */}
        <button
          className="md:hidden"
          // Ao clicar, INVERTE o valor atual de menuAberto (true vira false, e vice-versa)
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-[#1c2541]" />
            <span className="block h-0.5 w-6 bg-[#1c2541]" />
            <span className="block h-0.5 w-6 bg-[#1c2541]" />
          </div>
        </button>
      </header>

      {/*
        ===== CONCEITO 4: RENDERIZAÇÃO CONDICIONAL =====
        "menuAberto && (...)" significa: "SE menuAberto for verdadeiro,
        mostre o que vem depois do &&". Se for falso, não mostra nada.
        É assim que o menu mobile aparece e desaparece.
      */}
      {menuAberto && (
        <nav className="flex flex-col gap-4 border-t border-[#1c2541]/10 px-6 py-4 md:hidden">
          {linksMenu.map((link) => (
            <a key={link.texto} href={link.href} className="text-sm font-medium">
              {link.texto}
            </a>
          ))}
        </nav>
      )}

      {/* ===== SEÇÃO HERO (a "capa" do site) ===== */}
      <section className="flex min-h-[80vh] flex-col justify-center px-6 md:px-12">
        <p className="mb-4 font-mono text-sm text-[#c9702b]">Prazer,eu sou Lucas Leonel</p>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          {meuNome}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-[#1c2541]/70 md:text-xl">
          {minhaFrase}
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projetos"
            className="rounded-full bg-[#1c2541] px-6 py-3 text-sm font-medium text-[#f7f4ee] transition hover:bg-[#1c2541]/85"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded-full border border-[#1c2541]/20 px-6 py-3 text-sm font-medium transition hover:border-[#1c2541]/50"
          >
            Falar comigo
          </a>
        </div>
      </section>
    </div>
  );
}
