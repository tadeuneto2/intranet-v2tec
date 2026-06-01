from plone.dexterity.content import Container
from plone.schema.email import Email
from plone.supermodel import model
from v2tec.intranet import _
from v2tec.intranet.utils import validadores
from zope import schema
from zope.interface import implementer


class IEndereco(model.Schema):
    """Definição de uma Endereço."""

    model.fieldset(
        "endereco",
        _("Endereco"),
        fields=[
            "endereco",
            "complemento",
            "cidade",
            "estado",
            "cep",
        ],
    )

    endereco = schema.TextLine(
        title=_("Endereço"),
        description=_("Informe o endereço de contato"),
        required=False,
    )

    complemento = schema.TextLine(
        title=_("Complemento"),
        description=_("Informe o complemento do endereço de contato"),
        required=False,
    )

    cidade = schema.TextLine(
        title=_("Cidade"),
        description=_("Informe a cidade do endereço de contato"),
        required=False,
    )
    estado = schema.TextLine(
        title=_("Estado"),
        description=_("Informe o estado do endereço de contato"),
        required=False,
    )
    cep = schema.TextLine(
        title=_("CEP"),
        description=_("Informe o CEP do endereço de contato"),
        required=False,
    )


@implementer(IEndereco)
class Endereco(Container):
    """Endereço de contato no V2Tec."""
