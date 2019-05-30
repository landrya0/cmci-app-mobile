********

# Ecran d'accueil

1. Diaporama composé d'images et vidéos des événements passés

2. Caroussel des événements mis en avant ou des promotions (5 éléments au max)

3. Cartes avec images servant de lien de redirection vers d'autres sections de l'application

********

# Evenements

1. Liste de cartes d'événements (faire en sorte que 2 à 3 events s'affichent dans le viewport avant scroll)

2. Une carte d'événement est composée de:
2.1. Image (01)
2.2. Un texte court (tronqué si trop long)
2.3. Une barre d'actions :
2.3.1. Ajouter un participant
2.3.2. Partager l'event (le lien généré doit ramener directement sur les détails de l'event en question)
2.3.3. Ouvrir Google Maps avec l'adresse du lieu de l'event

3. Détails d'un événement
3.1. Afficher les images de cet event (disposer en caroussel)
3.2. Prendre la disposition actuelle des autres informations (bouton "Ajouter un participant" en plus des autres boutons et détails)


********

# Fonctionnalités

1. Système de notifications
1.1. Envoyer une notification depuis le backend si un event est posté ou modifié
1.2. Le clic sur cette notification redirige directement vers l'event en question
1.3. Une notification sera envoyée quand on se rapproche de la date d'un event (exemple: la "retraite de Marseille" est dans "03 jours")

2. QR Code
2.1. Générer un QR code avec les liens des applications iOS et Android et les afficher sur les flyers
2.2. [OU] générer un QR code avec le lien de l'event qui est sur le flyer. Scanner le code redirigera donc vers le détails de l'event dans l'application

3. Administration
3.1. CRUD des events


********

# Stack

- Base de données: Firebase Realtime Database
- Administration: NodeJS ou PHP ?
- Applications iOS et Android: ReactNative


********

# Fonctionnement

Soient 3 utilisateurs Jean, Pierre et Paul

Jean seul a installé l'application nouvellement; Pierre et Paul ne l'ont pas encore.

L'administrateur vient d'ajouter l'event "Festival musical ed 2019" qui se tiendra le "22 juin 2019" à "31 avenue du général de gaule" à partir de "14H30".

Jean recçoit une notification sur son téléphone. Il clique sur la notif, il est redirigé vers le détails de l'event "Festival musical". Il est interessé par l'event et veut y participer. Il clique donc sur "S'inscrire" ou "Ajouter un participant".

Puisqu'il n'a pas encore de compte dans l'application, il sera amené à créer un compte en passant par Google ou Facebook.

Après sa création de compte il est redirigé vers le détails et son inscription à l'event se fait automatiquement. Son inscription est renseignée dans la base de données Firebase.

(A chaque nouvelle inscription à un event, on met à jour une feuille excel (Google Sheets) avec la liste des participants; qu'on mettra à disposition du service d'accueil de l'event.)

Jean parle de l'event à Pierre et Paul, ils sont aussi interessés et veulent y participer. Pierre est tellement zèlé, il est allé chercher lui même l'application sur le Apple Store pour l'installer.

Pierre a donc l'application mais Paul pas encore.

Jean partage le lien de l'event à Pierre mais il partage le lien de l'application à Paul.

Pierre clique sur le lien et il est redirigé vers le détails de l'event. Il fait le même processus que Jean et il s'inscrit à l'event.

Paul voulait installer l'application en se servant du lien que Jean lui a envoyé mais son téléphone est déchargé.

Heureusement, Pierre qui est à côté de lui se propose de l'inscrire.
Pierre va donc dans les détails de l'event et clique sur "Ajouter un participant". Il renseigne les infos de Paul (nom complet, numero de téléphone, email si possible) et valide.

Paul aussi est alors inscrit à l'event.

Au final on a sur la feuille excel, 3 participants sachant que Jean et Pierre ont leur compte dans l'application mais pas Paul.

2 jours avant la date de l'event, Jean et Pierre reçoivent une notif ("event dans 2 jours") dans l'application. Paul de son côté reçoit un SMS ou un email ("event dans 2 jours") suivi d'un lien l'invitant à télécharger l'application.

********

# Tâches

- Socle
  - Navigation de bas
  - Chaque menu avec sa vue
- Page d'accueil
  - Diaporama
  - Caroussel avec events+promo
  - Cards de redirection
- Créer un compte via Google ou Facebook
- Lister les events cards
- Détails event
- Ajouter un participant
- Mettre à jour feuille excel après inscription
- Envoyer les notifs à la création/modification d'event et à l'approche de l'event
- Ajouter, modifier, supprimer un event
- Partager un event
- Ouvrir Google Maps avec adresse d'un event
- Envoyer mail ou SMS via administration automatiquement [ ou manuellement]