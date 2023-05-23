# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.
  
## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.


<table style="width:100%">
  <tr>
    <th rowspan="2">![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t3-pmv-ads-2023-1-e1-proj-web-t3-g3/assets/130862039/80919250-9d6e-48d1-8b79-5f2ebd81128b)</th>
    <th colspan="2">Patrick Cardoso Campos</th>
  </tr>
  <tr>
    <td><b>Idade:</b> 27 anos.<br><b>Ocupação:</b> Técnico em Informática.</td>
    <td><b>Aplicativos:</b><br> Instagram <br> WhatsApp <br> Youtube <br> Tik Tok </td>
  </tr>
  <tr>
    <td><b>Pontos Positivos:</b> Ajuda a passar o dia, diversão, a facilidade de comunicação e informação;</td>
    <td><b>Pontos Negativos:</b> Vícios, pessoas de mau-caráter, golpes, Fake News;</td>
    <td><b>Motivo:</b> Comecei a usar medição devido a enxaqueca crônica e ansiedade, mudanças de hábito não tive.</td>
  </tr>
  </table>
  
  <table style="width:100%">
  <tr>
    <th rowspan="2">IMAGEM</th>
    <th colspan="2">Amanda Marques</th>
  </tr>
  <tr>
    <td><b>Idade:</b> 29 anos.<br><b>Ocupação:</b> Gerente de Logística.</td>
    <td><b>Aplicativos:</b><br> Instagram <br> WhatsApp <br> Youtube <br> Tik Tok <br> Linkedin </td>
  </tr>
  <tr>
    <td><b>Pontos Positivos:</b> Informações, comunicação, velocidade e comodidade;</td>
    <td><b>Pontos Negativos:</b> Propagandas, falta de personalização;</td>
    <td><b>Motivo:</b> Desde pequena devido à asma grava, a utilização e acompanhamento médico de medicamentos e mudanças de dosagem.</td>
  </tr>
</table>

 <table style="width:100%">
  <tr>
    <th rowspan="2">IMAGEM</th>
    <th colspan="2">Jesuina de Queiroz Cheloni</th>
  </tr>
  <tr>
    <td><b>Idade:</b> 72 anos.<br><b>Ocupação:</b> Enfermeira Aposentada.</td>
    <td><b>Aplicativos:</b><br> Instagram <br> WhatsApp <br> Youtube <br> Tik Tok </td>
  </tr>
  <tr>
    <td><b>Pontos Positivos:</b> Diversão, contato com familiares distantes e possibilidade de assistir o que acontece em todo lugar;</td>
    <td><b>Pontos Negativos:</b> Muitas propagandas, golpes, dificuldades em algumas configurações pessoais e necessidade de ajuda de terceiros para realizar cadastro;</td>
    <td><b>Motivo:</b> Devido ao aparecimento da diabetes e pressão alta o consumo de medicamentos foi necessário. E devido aos efeitos colaterais as medicações aumentaram significativamente. Uma das mudanças mais rigorosas foi a retirada do açúcar (praticamente zero de açúcar) e a regularidade nos horários estabelecidos pelo médico para medicamentos e alimentação.</td>
  </tr>
</table>

 <table style="width:100%">
  <tr>
    <th rowspan="2">IMAGEM</th>
    <th colspan="2">Guilherme Ebani Jacques</th>
  </tr>
  <tr>
    <td><b>Idade:</b> 30 anos.<br><b>Ocupação:</b> Engenheiro.</td>
    <td><b>Aplicativos:</b><br> Instagram <br> WhatsApp <br> Youtube</td>
  </tr>
  <tr>
    <td><b>Pontos Positivos:</b> Entretenimento, aproximação das pessoas e informação;</td>
    <td><b>Pontos Negativos:</b> Disseminação de notícias ou informações falsas, comparação com a vida dos influenciadores;</td>
    <td><b>Motivo:</b> Tive que começar a usar uma das medicações devido a uma doença crônica e para proteção do sistema renal. Não precisei mudar nada no meu dia a dia com o uso das medicações.</td>
  </tr>
</table>

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Patrick Cardoso Campos  | Conhecimento e controle do que foi prescrito | Saber a dose certa e horários e ter um relatório para poder apresentar no dia da consulta |
| Jesuína de Queiroz Cheloni | Maior controle dos horários e Relatórios | Não esquecimento de tomar a medicação dentro do horário estipulado e melhor forma de repassar ou profissional da saúde o cronograma diário em uma consulta. |
| Jesuína de Queiroz Cheloni | Controle de quantidade de comprimidos dentro de cada horário | Facilidade para administração dos medicamentos dentro dos horários estipulados. |
| Jesuína de Queiroz Cheloni | Facilidade no manuseio do aplicativo | Maior controle das atividades sem a necessidade de intervenção de terceiros. |
| Amanda Marques |	Comunicação com o médico à distância de forma mais profissional e ágil.	| Muitas vezes o médico se encontra ocupado e não pode receber fisicamente.
| Guilherme Ebani	|Controle dos horários de cada dose com quantidade de medicamento ingerido e da does que ainda tenho disponível para controle de compra.	| Evitar deixar de tomar o remédio na hora certa e saber quando comprar mais medicamentos. |
| Guilherme Ebani |	Relatório mensal de aderência do tratamento.	| Garantir a eficácia do tratamento. |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
| **RF-01** |	O site deve permitir o usuário fazer login na aplicação. |	Alta |
| **RF-02**	| O site deve emitir um relatório com todas as medicações que foram marcadas como administradas.	| Média |
| **RF-03**	| O site deve permitir cadastrar contatos parar enviar os relatórios (e-mails).	| Baixa |
| **RF-04**	| O site deve permitir cadastrar as medicações que o usuário irá utilizar.	| Alta |
| **RF-05**	| O site deve permitir o usuário editar as informações das medicações cadastradas. |	Média |
| **RF-06** | O site deve permitir o usuário remover as informações de uma medicação cadastrada.	| Média |
| **RF-07**	| O site deve permitir ao usuário deslogar da aplicação.	| Alta |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|**RNF-01**| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); |Alta| 
|**RNF-02**|	O site deverá ser responsivo permitindo a visualização em um celular de forma adequada; |Alta|
|**RNF-03**|	O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).	|Alta|

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                           |
|--|-----------------------------------------------------|
|**RE-01**|	O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/07/2020.|
|**RE-02**|	O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.|
|**RE-03**|	A equipe não pode subcontratar o desenvolvimento do trabalho.|
