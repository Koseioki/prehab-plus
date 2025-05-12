import NotebookRings from '../assets/notebook-rings.svg';
import './Notebook.css';

function Notebook({children}) {
  return (
    <div className="notebook">
        <div className="notebook-rings"/>
        <div className="notebook-paper">
            <div className="content-width">
        {children}
        </div>
        </div>
    </div>
  );
}
export default Notebook;