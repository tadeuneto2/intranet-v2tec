from v2tec.intranet import logger
from zope.interface.interfaces import IObjectEvent


def rastreador_de_eventos_generico(obj, event: IObjectEvent):
    """Subscriber temporário para entender a ordem de disparos no console."""
    interface_do_evento = event.__class__.__name__
    id_do_objeto = getattr(obj, "id", "Desconhecido")

    logger.info(
        f"[EVENTO DETECTADO] O evento {interface_do_evento} "
        f"foi disparado para o objeto: {id_do_objeto}"
    )
