const Discord = require('discord.js');
const client = new Discord.Client();
config = require('./config');
client.login(config.discord.token);


// NELIESTI
client.on('message', message => {
  if (message.content.startsWith(config.fivem.komanda)) {
  message.delete({timeout: 2000})
  var member = message.mentions.members.first();
    if(message.member.roles.cache.has(config.fivem.direktoriaus_roles_id)) {
      if(message.member.roles.cache.has(config.fivem.policijos_roles_id)) {
        if(member.roles.cache.has(config.fivem.policijos_roles_id)) {
          member.roles.remove(config.fivem.policijos_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.policijos_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.fivem.policijos_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.policijos_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.fivem.mediku_roles_id)) {
        if(member.roles.cache.has(config.fivem.mediku_roles_id)) {
          member.roles.remove(config.fivem.mediku_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.mediku_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.fivem.mediku_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.mediku_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.fivem.mechaniku_roles_id)) {
        if(member.roles.cache.has(config.fivem.mechaniku_roles_id)) {
          member.roles.remove(config.fivem.mechaniku_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.mechaniku_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.fivem.mechaniku_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.mechaniku_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.fivem.bolt_roles_id)) {
        if(member.roles.cache.has(config.fivem.bolt_roles_id)) {
          member.roles.remove(config.fivem.bolt_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.bolt_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.fivem.bolt_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.bolt_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.frakcija1_roles_id)) {
        if(member.roles.cache.has(config.frakcija1_roles_id)) {
          member.roles.remove(config.frakcija1_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.frakcija1_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.frakcija1_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.frakcija1_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.frakcija2_roles_id)) {
        if(member.roles.cache.has(config.frakcija2_roles_id)) {
          member.roles.remove(config.frakcija2_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.frakcija2_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.frakcija2_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.frakcija2_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.frakcija3_roles_id)) {
        if(member.roles.cache.has(config.frakcija3_roles_id)) {
          member.roles.remove(config.frakcija3_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.frakcija3_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.frakcija3_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.frakcija3_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.frakcija4_roles_id)) {
        if(member.roles.cache.has(config.frakcija4_roles_id)) {
          member.roles.remove(config.frakcija4_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.frakcija4_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.frakcija4_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.frakcija4_pavadinimas} ${config.fivem.role}.`);
        }
      }
      if(message.member.roles.cache.has(config.frakcija5_roles_id)) {
        if(member.roles.cache.has(config.frakcija5_roles_id)) {
          member.roles.remove(config.frakcija5_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.nueme_role} ${member} ${config.fivem.frakcija5_pavadinimas} ${config.fivem.role}.`);
        } else {
          member.roles.add(config.frakcija5_roles_id);
          client.channels.cache.get(config.fivem.roles_logs_channel_id).send(`${message.member} ${config.fivem.uzdejo_role} ${member} ${config.fivem.frakcija5_pavadinimas} ${config.fivem.role}.`);
        }
      }
    } else {
      message.reply(config.fivem.neturi_leidimo);
    }
  }
})
// NELIESTI