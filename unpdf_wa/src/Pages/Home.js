import { Menubar } from 'primereact/menubar';
import { Component } from 'react';
import { withRouter } from '../withRouter';
import { Button } from 'primereact/button';
import ParticlesBg from 'particles-bg';
import { Card } from 'primereact/card';
import { Outlet } from 'react-router-dom';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'My profile',
                icon: 'pi pi-user',
                command: () => {
                    this.props.navigate('/home/profile');
                }
            },
            {
                label: 'My docs',
                icon: 'pi pi-book',
                command: () => {
                    this.props.navigate('/home/mydocs');
                }
            },
            {
                label: 'Soap Consume',
                icon: 'pi pi-envelope',
                command: () => {
                    this.props.navigate('/home/soapConsume');
                }
            },
            {
                label: 'Join pdf',
                icon: 'pi pi-file-pdf'
            },
            {
                label: 'Split pdf',
                icon: 'pi pi-file-pdf',
                command: () => {
                    this.props.navigate('/home/splitpdf');
                }
            },
            {
                label: 'Pdf to img',
                icon: 'pi pi-images'
            },
            {
                label: 'Img to pdf',
                icon: 'pi pi-image',
                command: () => {
                    this.props.navigate('/home/img2pdf');
                }
            },
            {
                label: 'Sign pdf',
                icon: 'pi pi-pencil'
            }
        ];
        this.toHome = this.toHome.bind(this);
        this.toSignOut = this.toSignOut.bind(this);
    }

    toHome = () => {
        this.props.navigate('/home/home');
    }

    toSignOut = () => {
        localStorage.clear();
        this.props.navigate('/');
    }

    render() {
        const start = <img src='/unpdf_regular_alt.png' alt='logo' className='menu-bar-logo' onClick={this.toHome} />
        const end = <Button label="Sign out" className='m-1' onClick={this.toSignOut}/>
        return(
            <main className='p-3'>
                <ParticlesBg type="circle" bg={true} />
                <div className='flex flex-column'>
                    <div className='m-3'>
                        <Menubar model={this.items} start={start} end={end}/>
                    </div>
                    <div className='m-3'>
                        <Card>
                            <Outlet />
                        </Card>
                    </div>
                </div>
                
                
            </main>
        )
    };
}

export default withRouter(Home);