from plone.dexterity.content import Container
from plone.supermodel import model
from v2tec.intranet.content.endereco import IEndereco
from zope.interface import implementer


class IArea(IEndereco, model.Schema):
    """Definição de uma Área."""


@implementer(IArea)
class Area(Container):
    """Uma Área no V2Tec."""
