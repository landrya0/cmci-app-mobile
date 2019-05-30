# CMCI-Paris-Android
Projet de développement de l'application mobile Android demandée par le frère Patrice NYAMI. L'objectif de l'application est de présenter les activités/enseignements/commissions de l'église de Paris d'une façon plus simple, rapide et accessible à tous ou du moins à un public cible.

# Spécifications
- Présenter les enseignements de l'Eglise disponibles en audio/vidéo
- Présenter les événements/retraites/conférences organisés par l'Eglise ou par Jeunesse Et Vie
- Présenter les différents départements/assemblées de l'Eglise
- Permettre aux utilisateurs authentifiées et autorisées de s'abonner aux flux d'informations d'un département/assemblée donnée
- Permettre d'inscrire plus rapidement les invités/participants aux retraites/cultes/conférences/événements et de centraliser ces données
- Permettre de tenir informée les abonés d'un événement qui se rapproche ou de nouvelles informations de la part de leur assemblée/département ou de l'Eglise en général
- Présenter brièvement l'Eglise aux invités/nouveaux utilisateurs à travers de la section "A propos"

# Fonctionnalités implémentées
### Connexion utilisateur
Toute personne peut se connecter à l'application avec son compte Google, **actuellement**. Une connexion via Facebook sera ajoutée plus tard.
Toute fois, une connexion anonyme est possible pour permettre aux invités de naviguer dans l'application jusqu'à un certain niveau.

### Evénements (retraites, conférences, cultes, ...)
La liste de tous les événements de l'Eglise et de Jeunesse Et Vie sont listés. Dans cette liste on peut trouver des retraites, conférences, cultes, mariages, ... ces événements peuvent être filtrés selon que leur date d'avènement est dans cette semaine, dans une semaine ou dans 1 ou 2 mois, ...

Sur un événement, un utilisateur authentifié peut : 
- s'inscrire;
- inscrire une autre personne;
- partager le lien vers l'événement (le lien ramène vers l'événement en question dans l'application, donc il faut que celui à qui on envoie le lien de l'événement ait l'application installée au préalable);
- obtenir l'adresse du lieu où se tiendra l'événement;

### Départements
La liste de tous les départements de l'Eglise est présentée, la chorale, la technique, la communication, ... avec une brève description si besoin.

### Assemblées
La liste des assemblées de ville est présentée, avec l'adresse du lieu où se tient la communion fraternelle ainsi que le créneau, les nouvelles informations à diffuser, les créneaux de sorties d'évangélisation, d'études bibliques, ...
Un nouveau converti qui vient de rejoindre une assemblée peut s'abonner pour recevoir les nouvelles de son assemblée plus efficacement. Le lien vers les détails de l'assemblée peut être partagée pour ce faire.

### Notifications
Pour être plus proche des utilisateurs, nous utilisons les notifications PUSH. Elles permettent de tenir informés constamment les utilisateurs/abonnés. De ce fait, dès qu'une session de la formation des dirigeants est repoussée ou quand une retraite JEV est programmée, bien que l'information circule sur WhatsApp, une notification **urgente** sera envoyée à tous les utilisateurs, eux tous pourront le voir clairement.

### Géolocalisation
Les lieux des événements ou des communions fraternelle seront tous ajoutés à l'application, de ce fait, ce sera plus simple d'accéder facilement à cette information, tracer l'itinéraire vers le lieu.
On pourra aussi, éventuellement, ajouter à un événement, plusieurs adresses avec leur libellés; des lieux qui entrent dans le déroulement de l'événement.
Comme exemple, pendant la retraite de JEV à Caen le 19 avril , on a eu besoin d'aller à plusieurs endroits nécessaire: l'appartement à Houlgate, la résidence des étudiants à Hérouville Saint-Clair, la gare de Caen, la maison des TAFEUMEWE, AGBAHOLOU, ...
Pour plus d'accessibilité on pourrait ajouter les adresses de ces lieux à l'événement.

## TODO
- Acheminer les inscriptions depuis l'application Android vers un fichier Excell sur sheets.google.com
- Permettre aux participants de payer leur contribution directement depuis l'application; acheminer ces données vers un fichier Excell sur sheets.google.com pour compte rendu
- Page d'accueil de l'application; présenter les enseignements phares
- Ajouter les enseignements audio/vidéo