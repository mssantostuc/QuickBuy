using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.ObjetoDeValor;
using QuickBuy.Repositorio.Config;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContexto : DbContext
    {
       

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Usuario> Produtos { get; set; }
        public DbSet<Dominio.Entidades.FormaPagamento> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedidos { get; set; }
        public DbSet<Dominio.ObjetoDeValor.FormaPagamento> FormaPagamento { get; set; }

        public QuickBuyContexto( DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /// Classes de mapeamento
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
