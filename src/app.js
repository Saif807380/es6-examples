import { variablesExample } from "./Variables";
import { defaultParametersExample } from "./DefaultParameters";
import { spreadOperatorExample } from "./SpreadOperator";
import { templateStringsExample } from "./TemplateStrings";
import { objectLiteralExample } from "./ObjectLiterals";
import { stringMethodsExample } from "./StringMethods";
import {
  arrowFunctionDeclarationExample,
  thisKeywordExample,
} from "./ArrowFunctions";
import { setExample } from "./Sets";
import { generatorExample } from "./Generators";

const examples = [
  {
    id: "variables",
    onClick: variablesExample,
  },
  {
    id: "default-parameter",
    onClick: defaultParametersExample,
  },
  {
    id: "spread-operator",
    onClick: spreadOperatorExample,
  },
  {
    id: "template-string",
    onClick: templateStringsExample,
  },
  {
    id: "object-literal",
    onClick: objectLiteralExample,
  },
  {
    id: "string-methods",
    onClick: stringMethodsExample,
  },
  {
    id: "set",
    onClick: setExample,
  },
  {
    id: "generator",
    onClick: generatorExample,
  },
  {
    id: "arrow-func-dec",
    onClick: arrowFunctionDeclarationExample,
  },
  {
    id: "this-keyword",
    onClick: thisKeywordExample,
  },
];

const app = () => {
  examples.forEach((example) => {
    let btn = document.getElementById(example.id);
    btn.onclick = example.onClick;
  });
};

app();
